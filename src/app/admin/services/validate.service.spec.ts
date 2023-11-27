import { TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { ValidateService } from './validate.service';

describe('ValidateService', () => {
  let validateService: ValidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateService],
    });

    validateService = TestBed.inject(ValidateService);
  });

  it('should be created', () => {
    expect(validateService).toBeTruthy();
  });

  describe('dateValidator', () => {
    let validatorFn: (control: AbstractControl) => ValidationErrors | null;

    beforeEach(() => {
      validatorFn = validateService.dateValidator();
    });

    it('should return null for a date in the past', () => {
      const control = new FormControl('2020-01-01');

      const result = validatorFn(control);

      expect(result).toBeNull();
    });

    it('should return validation error for a date in the future', () => {
      const control = new FormControl('2030-01-01');

      const result = validatorFn(control);

      expect(result).toEqual({ notValid: true });
    });

    it('should return null for an empty control value', () => {
      const control = new FormControl('');

      const result = validatorFn(control);

      expect(result).toBeNull();
    });
  });
});
