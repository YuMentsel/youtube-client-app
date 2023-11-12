import { Injectable } from '@angular/core';
import { SortSettings } from '../../models/sort-settings.model';

@Injectable({
  providedIn: 'root',
})
export class SortService {
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
}
