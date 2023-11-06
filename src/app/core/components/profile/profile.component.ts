import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../auth/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }
}
