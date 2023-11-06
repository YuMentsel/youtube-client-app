import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SortByTypePipe } from './pipes/sort-by-type.pipe';
import { SortByValuePipe } from './pipes/sort-by-value.pipe';
import { YouTubeRoutingModule } from './youtube-routing.module';
import { DetailedInfoComponent } from './pages/detailed-info/detailed-info.component';
import { StatusColorDirective } from './directives/status-color.directive';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SearchItemComponent } from '../components/search-item/search-item.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SortByTypePipe,
    SortByValuePipe,
    DetailedInfoComponent,
    StatisticsComponent,
  ],
  imports: [
    YouTubeRoutingModule,
    CommonModule,
    SharedModule,
    SearchItemComponent,
    StatusColorDirective,
  ],
})
export class YoutubeModule {}
