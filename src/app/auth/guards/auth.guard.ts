import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);
  if (!loginService.isLoggedIn()) {
    return true;
  }
  window.history.back();
  return false;
};
