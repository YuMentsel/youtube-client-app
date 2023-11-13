import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../../models/search-item.model';
import { SortService } from '../../../core/services/sort-form/sort-form.service';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  searchItems: Item[] = [];

  subscription!: Subscription;

  constructor(
    public youtubeService: YoutubeService,
    public sortService: SortService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.youtubeService.searchItems$.subscribe((items) => {
      this.searchItems = items;
      this.youtubeService.items = items;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
