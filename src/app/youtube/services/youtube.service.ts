import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { response } from '../../data/response';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  searchItems: SearchItem[] = response.items;

  getById(id: string): SearchItem | undefined {
    return this.searchItems.find((item) => item.id === id);
  }
}
