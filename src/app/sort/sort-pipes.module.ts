import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByTypePipe } from '../youtube/pipes/sort-by-type.pipe';
import { SortByValuePipe } from '../youtube/pipes/sort-by-value.pipe';

@NgModule({
  declarations: [SortByTypePipe, SortByValuePipe],
  imports: [CommonModule],
  exports: [SortByTypePipe, SortByValuePipe],
})
export class SortPipesModule {}
