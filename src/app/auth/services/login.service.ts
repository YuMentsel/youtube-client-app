import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly token = 'userToken';

  isUser$ = new BehaviorSubject<string>('');

  constructor(private router: Router) {
    const user = localStorage.getItem(this.token);
    if (user !== null) {
      this.isUser$.next(this.getUserName(user));
    }
  }

  login(user: string) {
    localStorage.setItem(this.token, user);
    this.router.navigate(['/youtube']);
    this.isUser$.next(this.getUserName(user));
  }

  logout() {
    localStorage.removeItem(this.token);
    this.router.navigate(['/auth']);
    this.isUser$.next('');
  }

  isLoggedIn() {
    return !!localStorage.getItem(this.token);
  }

  getUserName(user: string): string {
    return JSON.parse(user).login;
  }
}
