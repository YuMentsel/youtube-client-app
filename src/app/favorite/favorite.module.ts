import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './components/favorite.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { SearchItemComponent } from '../components/search-item/search-item.component';
import { SortByTypePipe } from '../youtube/pipes/sort-by-type.pipe';
import { SortByValuePipe } from '../youtube/pipes/sort-by-value.pipe';

@NgModule({
  declarations: [FavoriteComponent, SortByTypePipe, SortByValuePipe],
  imports: [CommonModule, FavoriteRoutingModule, SearchItemComponent],
})
export class FavoriteModule {}
