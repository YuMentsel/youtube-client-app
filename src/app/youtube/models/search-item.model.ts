interface ThumbnailItem {
  url: string;
  width?: number;
  height?: number;
}

interface Thumbnail {
  default?: ThumbnailItem;
  medium: ThumbnailItem;
  high?: ThumbnailItem;
  standard?: ThumbnailItem;
  maxres?: ThumbnailItem;
}

interface Snippet {
  publishedAt: string;
  channelId?: string;
  title: string;
  description: string;
  thumbnails: Thumbnail;
  channelTitle?: string;
  tags?: string[];
  categoryId?: string;
  liveBroadcastContent?: string;
  defaultLanguage?: string;
  localized?: {
    title: string;
    description: string;
  };
  defaultAudioLanguage?: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount?: string;
  favoriteCount?: string;
  commentCount: string;
}

export interface Item<T> {
  kind?: string;
  etag?: string;
  videoLink?: string;
  id: T;
  snippet: Snippet;
  statistics: Statistics;
}

export interface Id {
  kind: string;
  videoId: string;
}
