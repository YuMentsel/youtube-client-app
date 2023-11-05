import { Component } from '@angular/core';
import { SearchService } from '../../services/search-form/search-form.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  searchValue = '';

  constructor(private searchService: SearchService) {}

  submitSearchForm() {
    this.searchService.setSearchValue(this.searchValue);
  }
}
