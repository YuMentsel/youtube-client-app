interface ThumbnailItem {
  url: string;
  width: number;
  height: number;
}

interface Thumbnail {
  default: ThumbnailItem;
  medium: ThumbnailItem;
  high: ThumbnailItem;
  standard: ThumbnailItem;
  maxres: ThumbnailItem;
}

interface Localized {
  title: string;
  description: string;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnail;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}
