import { Component } from '@angular/core';
import { Direction } from '../../../constants/enums';
import { SortService } from '../../services/sort-form/sort-form.service';

@Component({
  selector: 'app-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: ['./sort-form.component.scss'],
})
export class SortFormComponent {
  sortDir = '';

  sortValue = '';

  constructor(private sortService: SortService) {}

  setSortingType(sortType: string) {
    this.sortDir = this.sortDir === Direction.asc ? Direction.desc : Direction.asc;
    this.sortService.setSortSettings({ sortType, sortDir: this.sortDir });
  }

  submitSortValue() {
    this.sortService.setSortingValue(this.sortValue);
  }
}
