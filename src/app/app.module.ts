import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { ProfileComponent } from './components/header/profile/profile.component';
import { SearchFormComponent } from './components/header/search-form/search-form.component';
import { SortFormComponent } from './components/header/sort-form/sort-form.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SortByValuePipe } from './pipes/sort-by-value.pipe';
import { SortByTypePipe } from './pipes/sort-by-type.pipe';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    SearchFormComponent,
    SortFormComponent,
    SearchResultsComponent,
    SortByValuePipe,
    SortByTypePipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    CustomButtonComponent,
    SearchItemComponent,
  ],
})
export class AppModule {}
