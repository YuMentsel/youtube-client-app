import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SortFormComponent } from './components/sort-form/sort-form.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SearchService } from './services/search-form/search-form.service';
import { SortService } from './services/sort-form/sort-form.service';
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';

@NgModule({
  declarations: [HeaderComponent, ProfileComponent, SearchFormComponent, SortFormComponent],
  providers: [SearchService, SortService],
  exports: [HeaderComponent, ProfileComponent, SearchFormComponent, SortFormComponent],
  imports: [CommonModule, AngularMaterialModule, CustomButtonComponent, FormsModule],
})
export class CoreModule {}
