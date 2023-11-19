import { Item } from '../../youtube/models/search-item.model';

export interface YoutubeState {
  customItems: Item<string>[];
  youtubeItems: Item<string>[];
}
