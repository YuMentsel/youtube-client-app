import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { Store } from '@ngrx/store';
import { minSearchLength, requestDelay } from '../../../constants/constants';
import { YoutubeService } from '../../../youtube/services/youtube.service';
import { fetchItems, fetchSearchItems } from '../../../redux/actions/youtube.action';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  searchValue$ = new BehaviorSubject<string>('');

  searchSubscription!: Subscription;

  constructor(
    private youtubeService: YoutubeService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchValue$
      .pipe(
        filter((val) => val.length >= minSearchLength),
        debounceTime(requestDelay),
        distinctUntilChanged(),
      )
      .subscribe((value) => {
        this.youtubeService.searchValue$.next(value);
        this.store.dispatch(fetchSearchItems({ value }));
      });
  }

  searchVideo(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value.trim();
    const { length } = value;
    if (length >= minSearchLength) {
      this.youtubeService.isResults = true;
      this.searchValue$.next(value);
    } else {
      this.youtubeService.isResults = false;
      this.store.dispatch(fetchItems({ youtubeItems: [] }));
    }
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
