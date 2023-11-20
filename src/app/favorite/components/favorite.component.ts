import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, mergeMap } from 'rxjs';
import { SortService } from '../../core/services/sort-form/sort-form.service';
import { selectFavIds } from '../../redux/selectors/youtube.selectors';
import { Item } from '../../youtube/models/search-item.model';
import { FavoriteService } from '../service/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit, OnDestroy {
  favItems!: Item<string>[];

  subscription!: Subscription;

  constructor(
    public favoriteService: FavoriteService,
    public sortService: SortService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select(selectFavIds)
      .pipe(mergeMap((ids) => this.favoriteService.getById(ids.join(','))))
      .subscribe((item) => {
        this.favItems = item;
      });
  }

  ngOnDestroy(): void {
    this.sortService.toggleSortForm(false);
    this.subscription.unsubscribe();
  }
}
