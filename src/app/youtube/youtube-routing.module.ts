import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { DetailedInfoComponent } from './pages/detailed-info/detailed-info.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: ':id', component: DetailedInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YouTubeRoutingModule {}
