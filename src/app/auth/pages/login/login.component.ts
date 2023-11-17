import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormErrorMessages } from '../../../constants/enums';
import { LoginService } from '../../services/login.service';
import { pattern } from '../../../constants/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(private loginService: LoginService) {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(pattern)]),
    });
  }

  submitForm() {
    this.loginService.login(JSON.stringify(this.form.value));
  }

  getLoginErrorMessage() {
    const login = this.form.get('login');
    if (login?.errors?.['required']) return LoginFormErrorMessages.login;
    return login?.errors?.['email'] ? LoginFormErrorMessages.loginValid : '';
  }

  getPasswordErrorMessage() {
    const password = this.form.get('password');
    if (password?.errors?.['required']) return LoginFormErrorMessages.password;
    return password?.errors?.['pattern'] ? LoginFormErrorMessages.passwordValid : '';
  }

  getLoginError(error: string) {
    return this.form.get('login')?.errors?.[error];
  }

  getPasswordError(error: string) {
    return this.form.get('password')?.errors?.[error];
  }
}
