import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SortFormComponent } from './components/sort-form/sort-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SortService } from './services/sort-form/sort-form.service';

@NgModule({
  declarations: [
    HeaderComponent,
    ProfileComponent,
    SearchFormComponent,
    SortFormComponent,
    NotFoundComponent,
  ],
  providers: [SortService],
  imports: [CommonModule, SharedModule, RouterModule, CustomButtonComponent],
  exports: [
    HeaderComponent,
    ProfileComponent,
    SearchFormComponent,
    SortFormComponent,
    NotFoundComponent,
  ],
})
export class CoreModule {}
