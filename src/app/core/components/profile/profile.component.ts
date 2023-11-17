import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../auth/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  userName = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.loginService.userName$.subscribe((name) => {
      this.userName = name;
    });
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  getButtonName(): string {
    return this.loginService.isLoggedIn() ? 'Logout' : 'Login';
  }

  ngOnDestroy() {
    this.loginService.userName$.unsubscribe();
  }
}
