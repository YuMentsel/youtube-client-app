import { Component, EventEmitter, Output } from '@angular/core';
import { SortSettings } from '../../../models/sort-settings.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSortForm = false;
  @Output() submitSearch = new EventEmitter<string>();
  @Output() setSortSettings = new EventEmitter<SortSettings>();
  @Output() setSortValue = new EventEmitter<string>();

  submitSearchingValue(submitValue: string) {
    this.submitSearch.emit(submitValue);
  }

  submitSortSettings(settings: SortSettings) {
    this.setSortSettings.emit(settings);
  }

  setSortingValue(value: string) {
    this.setSortValue.emit(value);
  }
}
