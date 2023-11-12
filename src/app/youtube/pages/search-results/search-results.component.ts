import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { SortService } from '../../../core/services/sort-form/sort-form.service';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  searchItems!: SearchItem[];

  constructor(
    public youtubeService: YoutubeService,
    public sortService: SortService,
  ) {}

  ngOnInit(): void {
    this.youtubeService.searchItems$.subscribe((items) => {
      this.searchItems = items;
    });
  }
}
