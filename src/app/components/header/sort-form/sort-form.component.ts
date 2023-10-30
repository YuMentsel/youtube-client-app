import { Component, EventEmitter, Output } from '@angular/core';
import { SortSettings } from '../../../models/sort-settings.model';

@Component({
  selector: 'app-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: ['./sort-form.component.scss'],
})
export class SortFormComponent {
  sortDir = '';

  sortValue = '';

  @Output() setSortSettings = new EventEmitter<SortSettings>();

  @Output() setSortingValue = new EventEmitter<string>();

  setSortingType(sortType: string) {
    this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    this.setSortSettings.emit({ sortType, sortDir: this.sortDir });
  }

  submitSortValue() {
    this.setSortingValue.emit(this.sortValue);
  }
}
