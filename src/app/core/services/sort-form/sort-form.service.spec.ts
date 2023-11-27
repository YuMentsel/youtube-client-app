import { TestBed } from '@angular/core/testing';
import { SortSettings } from '../../models/sort-settings.model';
import { SortService } from './sort-form.service';

describe('SortService', () => {
  let sortService: SortService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortService],
    });

    sortService = TestBed.inject(SortService);
  });

  it('should be created', () => {
    expect(sortService).toBeTruthy();
  });

  describe('setSortSettings', () => {
    it('should set sortType sortDir', () => {
      const settings: SortSettings = { sortType: 'date', sortDir: 'asc' };

      sortService.setSortSettings(settings);

      expect(sortService.sortType).toEqual('date');
      expect(sortService.sortDir).toEqual('asc');
    });
  });

  describe('setSortingValue', () => {
    it('should set sortValue', () => {
      const value = 'value';
      sortService.setSortingValue(value);

      expect(sortService.sortValue).toEqual('value');
    });
  });

  describe('toggleSortForm', () => {
    it('should toggle isSortForm$', () => {
      expect(sortService.isSortForm$.getValue()).toBeFalsy();

      sortService.toggleSortForm(true);
      expect(sortService.isSortForm$.getValue()).toBeTruthy();

      sortService.toggleSortForm(false);
      expect(sortService.isSortForm$.getValue()).toBeFalsy();
    });
  });
});
