import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SortByTypePipe } from './pipes/sort-by-type.pipe';
import { SortByValuePipe } from './pipes/sort-by-value.pipe';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { YouTubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [SearchResultsComponent, SortByTypePipe, SortByValuePipe],
  imports: [YouTubeRoutingModule, CommonModule, SharedModule, SearchItemComponent],
})
export class YoutubeModule {}
