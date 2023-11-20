import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StatusColorDirective } from '../../youtube/directives/status-color.directive';
import { Item } from '../../youtube/models/search-item.model';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { removeCustomItem } from '../../redux/actions/youtube.action';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, CustomButtonComponent, StatusColorDirective],
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() searchItem!: Item<string>;

  constructor(
    private router: Router,
    private store: Store,
  ) {}

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
}
