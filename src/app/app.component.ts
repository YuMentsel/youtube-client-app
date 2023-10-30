import { Component } from '@angular/core';
import { SortSettings } from './models/sort-settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'youtube-client-app';
  searchValue = '';
  sortType = '';
  sortDir = '';
  sortValue = '';

  submitSearchForm(value: string): void {
    this.searchValue = value;
  }

  setSortSettings(settings: SortSettings) {
    this.sortType = settings.sortType;
    this.sortDir = settings.sortDir;
  }

  setSortingValue(value: string) {
    this.sortValue = value;
  }
}
