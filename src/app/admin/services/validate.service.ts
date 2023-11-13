import { Injectable } from '@angular/core';
import { ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  dateValidator(): ValidatorFn {
    return (control): ValidationErrors | null => {
      const value = Date.parse(control.value);
      const now = Date.now();
      return value > now ? { notValid: true } : null;
    };
  }
}
