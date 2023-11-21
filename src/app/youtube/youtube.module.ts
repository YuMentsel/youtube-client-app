import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { YouTubeRoutingModule } from './youtube-routing.module';
import { DetailedInfoComponent } from './pages/detailed-info/detailed-info.component';
import { StatusColorDirective } from './directives/status-color.directive';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SearchItemComponent } from '../components/search-item/search-item.component';
import { SortPipesModule } from '../sort/sort-pipes.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchResultsComponent, DetailedInfoComponent, StatisticsComponent],
  imports: [
    YouTubeRoutingModule,
    CommonModule,
    SharedModule,
    SortPipesModule,
    SearchItemComponent,
    StatusColorDirective,
  ],
})
export class YoutubeModule {}
