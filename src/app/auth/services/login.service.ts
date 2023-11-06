import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly token = 'userToken';

  constructor(private router: Router) {}

  login(user: string) {
    localStorage.setItem(this.token, user);
    this.router.navigate(['/youtube']);
  }

  logout() {
    localStorage.removeItem(this.token);
    this.router.navigate(['/auth']);
  }

  isLoggedIn() {
    return !!localStorage.getItem(this.token);
  }
}
