import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

describe('LoginService', () => {
  const user = '{"login":"user@gmail.com","password":"Yo8*98PaOQip8"}';
  let loginService: LoginService;
  let routerMock: { navigate: jest.Mock<void, [string[]]> };

  beforeEach(() => {
    routerMock = {
      navigate: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [LoginService, { provide: Router, useValue: routerMock }],
    });

    loginService = TestBed.inject(LoginService);
  });

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  describe('login', () => {
    it('should set user in localStorage, navigate to /youtube, and update userName$', () => {
      loginService.login(user);

      expect(localStorage.getItem('userToken')).toEqual(user);
      expect(routerMock.navigate).toHaveBeenCalledWith(['/youtube']);
      expect(loginService.userName$.getValue()).toEqual('user@gmail.com');
    });
  });

  describe('logout', () => {
    it('should remove user from localStorage, navigate to /auth, and update userName$', () => {
      localStorage.setItem('userToken', 'user@gmail.com');

      loginService.logout();

      expect(localStorage.getItem('userToken')).toBeNull();
      expect(routerMock.navigate).toHaveBeenCalledWith(['/auth']);
      expect(loginService.userName$.getValue()).toEqual('');
    });
  });

  describe('isLoggedIn', () => {
    it('should return true if user is in localStorage', () => {
      localStorage.setItem('userToken', 'user@gmail.com');

      const result = loginService.isLoggedIn();

      expect(result).toBeTruthy();
    });

    it('should return false if user is not in localStorage', () => {
      const result = loginService.isLoggedIn();

      expect(result).toBeFalsy();
    });
  });

  describe('getUserName', () => {
    it('should return the username from the given user string', () => {
      const result = loginService.getUserName(user);

      expect(result).toEqual('user@gmail.com');
    });
  });
});
