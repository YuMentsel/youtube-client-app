import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../youtube/models/search-item.model';

@Pipe({
  name: 'sortByValue',
})
export class SortByValuePipe implements PipeTransform {
  transform(items: SearchItem[], value: string): SearchItem[] {
    if (!value) return items;

    return items.filter((item) =>
      item.snippet.title.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()),
    );
  }
}
