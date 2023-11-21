import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './components/favorite.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { SearchItemComponent } from '../components/search-item/search-item.component';
import { SortPipesModule } from '../sort/sort-pipes.module';

@NgModule({
  declarations: [FavoriteComponent],
  imports: [CommonModule, FavoriteRoutingModule, SearchItemComponent, SortPipesModule],
})
export class FavoriteModule {}
