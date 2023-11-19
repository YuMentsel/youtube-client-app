import { Pipe, PipeTransform } from '@angular/core';
import { Id, Item } from '../../youtube/models/search-item.model';

@Pipe({
  name: 'sortByValue',
})
export class SortByValuePipe implements PipeTransform {
  transform(items: Item<Id>[], value: string): Item<Id>[] {
    if (!value) return items;

    return items.filter((item) =>
      item.snippet.title.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()),
    );
  }
}
