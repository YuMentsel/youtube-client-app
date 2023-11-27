import { Item } from '../../youtube/models/search-item.model';
import { YoutubeState } from '../models/state.model';

export const customItemsMock: Item<string>[] = [
  {
    kind: 'custom',
    id: 'test-custom-id-1',
    snippet: {
      publishedAt: '2020-06-10',
      thumbnails: { medium: { url: 'test-custom-url-1' } },
      title: 'test-custom-title-1',
      description: 'test-custom-description-1',
    },
    statistics: {
      viewCount: 'test-custom-viewCount-1',
      likeCount: 'test-custom-likeCount-1',
      commentCount: 'test-custom-commentCount-1',
    },
  },
  {
    kind: 'custom',
    id: 'test-custom-id-2',
    snippet: {
      publishedAt: '2022-12-10',
      thumbnails: { medium: { url: 'test-custom-url-2' } },
      title: 'test-custom-title-2',
      description: 'test-custom-description',
    },
    statistics: {
      viewCount: 'test-custom-viewCount-2',
      likeCount: 'test-custom-likeCount-2',
      commentCount: 'test-custom-commentCount-2',
    },
  },
];

export const customItemMock: Item<string> = {
  kind: 'custom',
  id: 'test-custom-id',
  snippet: {
    publishedAt: '2020-02-10',
    thumbnails: { medium: { url: 'test-custom-url' } },
    title: 'test-custom-title',
    description: 'test-custom-description',
  },
  statistics: {
    viewCount: 'test-custom-viewCount',
    likeCount: 'test-custom-likeCount',
    commentCount: 'test-custom-commentCount',
  },
};

export const youtubeItemsMock: Item<string>[] = [
  {
    kind: 'youtube',
    id: 'test-youtube-id-1',
    snippet: {
      publishedAt: '2018-03-10',
      thumbnails: { medium: { url: 'test-youtube-url-1' } },
      title: 'test-youtube-title-1',
      description: 'test-youtube-description-1',
    },
    statistics: {
      viewCount: 'test-youtube-viewCount-1',
      likeCount: 'test-youtube-likeCount-1',
      commentCount: 'test-youtube-commentCount-1',
    },
  },
  {
    kind: 'youtube',
    id: 'test-youtube-id-2',
    snippet: {
      publishedAt: '2021-12-10',
      thumbnails: { medium: { url: 'test-youtube-url-2' } },
      title: 'test-youtube-title-2',
      description: 'test-youtube-description',
    },
    statistics: {
      viewCount: 'test-youtube-viewCount-2',
      likeCount: 'test-youtube-likeCount-2',
      commentCount: 'test-youtube-commentCount-2',
    },
  },
];

export const youtubeStateMock: YoutubeState = {
  customItems: customItemsMock,
  youtubeItems: youtubeItemsMock,
  favIds: ['test-youtube-id-2'],
  token: 'token',
  page: { next: 'nextPageToken', prev: 'prevPageToken' },
};
