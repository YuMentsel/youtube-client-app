import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(pattern)]),
    });
  }

  submitForm() {
    this.loginService.login(JSON.stringify(this.form.value));
  }

  checkLength(control: FormControl) {
    return control.value.trim().length === 0 ? { lengthError: true } : null;
  }

  getLoginError(error: string) {
    return this.form.get('login')?.errors?.[error];
  }

  getPasswordError(error: string) {
    return this.form.get('password')?.errors?.[error];
  }
}
