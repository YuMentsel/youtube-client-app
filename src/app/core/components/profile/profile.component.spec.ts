import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ProfileComponent } from './profile.component';
import { LoginService } from '../../../auth/services/login.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockLoginService: Pick<LoginService, 'userName$' | 'logout' | 'isLoggedIn'>;
  let userName: DebugElement;
  let button: DebugElement;

  beforeEach(() => {
    mockLoginService = {
      userName$: new BehaviorSubject<string>(''),
      logout: () => {
        mockLoginService.userName$.next('');
      },
      isLoggedIn: () => {
        return !!mockLoginService.userName$.getValue();
      },
    };

    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [{ provide: LoginService, useValue: mockLoginService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userName = fixture.debugElement.query(By.css('.user-name'));
    button = fixture.debugElement.query(By.css('.button-name'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Your Name" and "Login" button when user is logged out', () => {
    expect(userName.nativeElement.textContent).toBe('Your Name');
    expect(button.nativeElement.textContent).toBe('Login');
  });

  it('should display the username and "Logout" button when user is logged in', () => {
    mockLoginService.userName$.next('User');
    fixture.detectChanges();

    expect(userName.nativeElement.textContent).toBe('User');
    expect(button.nativeElement.textContent).toBe('Logout');
  });

  it('should logout when the "Login" button is clicked', () => {
    button.nativeElement.click();

    fixture.detectChanges();

    expect(userName.nativeElement.textContent).toBe('Your Name');
    expect(button.nativeElement.textContent).toBe('Login');
  });
});
