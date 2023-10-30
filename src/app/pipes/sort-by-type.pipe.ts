import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortByType',
})
export class SortByTypePipe implements PipeTransform {
  transform(items: SearchItem[], sortType: string, sortDir: string): SearchItem[] {
    const dir = sortDir === 'asc' ? 1 : -1;
    switch (sortType) {
      case 'date': {
        return items.sort(
          (a, b) => (Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt)) * dir,
        );
      }
      case 'views': {
        return items.sort((a, b) => (+b.statistics.viewCount - +a.statistics.viewCount) * dir);
      }
      default: {
        return items;
      }
    }
  }
}
