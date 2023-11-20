import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectBooleanByIdPresenceInFav } from '../../redux/selectors/youtube.selectors';
import { customKind } from '../../constants/constants';
import { StatusColorDirective } from '../../youtube/directives/status-color.directive';
import { Item } from '../../youtube/models/search-item.model';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import {
  addToFavIds,
  removeCustomItem,
  removeFromFavIds,
} from '../../redux/actions/youtube.action';
import { Fav } from '../../constants/enums';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, CustomButtonComponent, StatusColorDirective],
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit, OnDestroy {
  @Input() searchItem!: Item<string>;

  icon = Fav.no;

  subscription!: Subscription;

  constructor(
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    if (this.searchItem.kind !== customKind)
      this.subscription = this.store
        .select(selectBooleanByIdPresenceInFav(this.searchItem.id))
        .subscribe((value) => { // eslint-disable-line
          this.icon = value ? Fav.yes : Fav.no;
        });
  }

  showDetailedInfo(): void {
    this.router.navigate(['/youtube', this.searchItem.id]);
  }

  removeItem() {
    const lsString = localStorage.getItem('cards');
    const lsCards: Item<string>[] = lsString ? JSON.parse(lsString) : [];
    localStorage.setItem(
      'cards',
      JSON.stringify(lsCards.filter((item) => item.id !== this.searchItem.id)),
    );
    this.store.dispatch(removeCustomItem({ id: this.searchItem.id }));
  }

  toggleFav() {
    this.icon = this.icon === Fav.no ? this.addToFav() : this.removeFromFav();
  }

  addToFav() {
    this.store.dispatch(addToFavIds({ id: this.searchItem.id }));
    return Fav.yes;
  }

  removeFromFav() {
    this.store.dispatch(removeFromFavIds({ id: this.searchItem.id }));

    return Fav.no;
  }

  ngOnDestroy(): void {
    if (this.searchItem.kind !== customKind) this.subscription.unsubscribe();
  }
}
