import { Component } from '@angular/core';
import { SearchItem } from '../../../models/search-item.model';
import { response } from '../../../data/response';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  searchItems: SearchItem[] = response.items;
}
