import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortSettings } from '../../models/sort-settings.model';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  isSortForm$ = new BehaviorSubject<boolean>(false);

  sortType = '';

  sortDir = '';

  sortValue = '';

  setSortSettings(settings: SortSettings): void {
    this.sortType = settings.sortType;
    this.sortDir = settings.sortDir;
  }

  setSortingValue(value: string): void {
    this.sortValue = value;
  }

  toggleSortForm(val: boolean) {
    this.isSortForm$.next(val);
  }
}
