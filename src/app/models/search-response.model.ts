import { SearchItem } from './search-item.model';

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface SearchResponse {
  TODO: string;
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}
