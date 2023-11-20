import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { SortService } from '../../../core/services/sort-form/sort-form.service';
import { YoutubeService } from '../../services/youtube.service';
import { selectItems } from '../../../redux/selectors/youtube.selectors';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  searchItems$ = this.store.select(selectItems);

  subscription!: Subscription;

  constructor(
    public youtubeService: YoutubeService,
    public sortService: SortService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.subscription = this.youtubeService.searchItems$.subscribe();
  }

  ngOnDestroy(): void {
    this.sortService.toggleSortForm(false);
    this.subscription.unsubscribe();
  }
}
