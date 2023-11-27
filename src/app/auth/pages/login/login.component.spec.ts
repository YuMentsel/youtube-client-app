import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginService } from '../../services/login.service';
import { LoginFormErrorMessages } from '../../../constants/enums';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginServiceMock: jest.Mocked<LoginService>;

  beforeEach(() => {
    loginServiceMock = {
      login: jest.fn(),
    } as unknown as jest.Mocked<LoginService>;

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [{ provide: LoginService, useValue: loginServiceMock }],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loginService.login on submitForm', () => {
    component.form.setValue({ login: 'user@gmail.com', password: 'Yo8*98PaOQip8' });
    component.submitForm();

    expect(loginServiceMock.login).toHaveBeenCalledWith(
      '{"login":"user@gmail.com","password":"Yo8*98PaOQip8"}',
    );
  });

  it('should return login error message for required validation', () => {
    component.form.get('login')?.markAsTouched();

    expect(component.getLoginErrorMessage()).toBe(LoginFormErrorMessages.login);
  });

  it('should return login error message for email validation', () => {
    component.form.get('login')?.setValue('invalid-email');
    component.form.get('login')?.markAsTouched();

    expect(component.getLoginErrorMessage()).toBe(LoginFormErrorMessages.loginValid);
  });

  it('should return empty string for login error when no error', () => {
    component.form.get('login')?.setValue('user@gmail.com');
    expect(component.getLoginErrorMessage()).toBe('');
  });

  it('should return password error message for required validation', () => {
    component.form.get('password')?.markAsTouched();

    expect(component.getPasswordErrorMessage()).toBe(LoginFormErrorMessages.password);
  });

  it('should return password error message for pattern validation', () => {
    component.form.get('password')?.setValue('invalid-password');
    component.form.get('password')?.markAsTouched();

    expect(component.getPasswordErrorMessage()).toBe(LoginFormErrorMessages.passwordValid);
  });

  it('should return empty string for password error when no error', () => {
    component.form.get('password')?.setValue('Yo8*98PaOQip8');
    expect(component.getPasswordErrorMessage()).toBe('');
  });
});
