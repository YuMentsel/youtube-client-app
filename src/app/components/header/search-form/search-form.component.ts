import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  searchValue = '';
  @Output() submitSearch = new EventEmitter<string>();

  submitSearchForm() {
    this.submitSearch.emit(this.searchValue);
  }
}
