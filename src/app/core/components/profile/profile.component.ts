import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../../../auth/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  userName = '';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.userName$.subscribe((name) => {
      this.userName = name;
    });
  }

  logout(): void {
    this.loginService.logout();
  }

  getButtonName(): string {
    return this.loginService.isLoggedIn() ? 'Logout' : 'Login';
  }

  ngOnDestroy() {
    this.loginService.userName$.unsubscribe();
  }
}
