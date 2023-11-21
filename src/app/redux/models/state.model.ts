import { Item } from '../../youtube/models/search-item.model';
import { PageInfo } from './page-info.models';

export interface YoutubeState {
  customItems: Item<string>[];
  youtubeItems: Item<string>[];
  favIds: string[];
  token: string;
  page: PageInfo;
}
