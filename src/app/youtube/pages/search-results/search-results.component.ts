import { Component } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { SearchService } from '../../../core/services/search-form/search-form.service';
import { SortService } from '../../../core/services/sort-form/sort-form.service';
import { response } from '../../../data/response';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  searchItems: SearchItem[] = response.items;

  constructor(
    public searchService: SearchService,
    public sortService: SortService,
  ) {}
}
