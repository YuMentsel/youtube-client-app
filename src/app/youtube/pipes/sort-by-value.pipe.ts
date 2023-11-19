import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/search-item.model';

@Pipe({
  name: 'sortByValue',
})
export class SortByValuePipe implements PipeTransform {
  transform(items: Item<string>[], value: string): Item<string>[] {
    if (!value) return items;

    return items.filter((item) =>
      item.snippet.title.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()),
    );
  }
}
