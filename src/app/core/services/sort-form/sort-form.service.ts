import { Injectable } from '@angular/core';
import { SortSettings } from '../../../youtube/models/sort-settings.model';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  sortType = '';

  sortDir = '';

  sortValue = '';

  setSortSettings(settings: SortSettings) {
    this.sortType = settings.sortType;
    this.sortDir = settings.sortDir;
  }

  setSortingValue(value: string) {
    this.sortValue = value;
  }
}
