import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CoreModule } from './core/core.module';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { YoutubeInterceptor } from './youtube/interceptor/youtube.interceptor';

@NgModule({
  declarations: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true }],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    CustomButtonComponent,
    SearchItemComponent,
  ],
})
export class AppModule {}
