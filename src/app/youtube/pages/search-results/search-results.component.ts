import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { getPageToken } from '../../../redux/actions/youtube.action';
import { SortService } from '../../../core/services/sort-form/sort-form.service';
import { YoutubeService } from '../../services/youtube.service';
import {
  selectCustomLength,
  selectItems,
  selectPage,
} from '../../../redux/selectors/youtube.selectors';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  searchItems$ = this.store.select(selectItems);

  subscription!: Subscription;

  customSubscription!: Subscription;

  prevPage = '';

  nextPage = '';

  constructor(
    public youtubeService: YoutubeService,
    public sortService: SortService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    // eslint-disable-next-line
    this.subscription = this.store.select(selectPage).subscribe((page) => {
      this.prevPage = page.prev;
      this.nextPage = page.next;
    });
    this.customSubscription = this.store
      .select(selectCustomLength)
      .subscribe((item) => this.youtubeService.customCount$.next(item)); // eslint-disable-line
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }

  goToNextPage() {
    this.youtubeService.pageToken$.next(this.nextPage);
    this.store.dispatch(getPageToken({ token: this.nextPage }));
    this.youtubeService.getNewPage();
  }

  goToPrevPage() {
    this.youtubeService.pageToken$.next(this.nextPage);
    this.store.dispatch(getPageToken({ token: this.prevPage }));
    this.youtubeService.getNewPage();
  }
}
