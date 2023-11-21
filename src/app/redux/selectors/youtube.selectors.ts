import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Item } from '../../youtube/models/search-item.model';
import { YoutubeState } from '../models/state.model';
import { PageInfo } from '../models/page-info.models';

export const selectYoutube = createFeatureSelector<YoutubeState>('youtube');

export const selectYoutubeItems = createSelector(
  selectYoutube,
  (state: YoutubeState): Item<string>[] => state.youtubeItems,
);

export const selectCustomItems = createSelector(
  selectYoutube,
  (state: YoutubeState): Item<string>[] => state.customItems,
);

export const selectFavIds = createSelector(
  selectYoutube,
  (state: YoutubeState): string[] => state.favIds,
);

export const selectCustomLength = createSelector(
  selectYoutube,
  (state: YoutubeState): number => state.customItems.length,
);

export const selectPrevPage = createSelector(
  selectYoutube,
  (state: YoutubeState): string => state.page.prev,
);

export const selectPage = createSelector(
  selectYoutube,
  (state: YoutubeState): PageInfo => state.page,
);

export const selectToken = createSelector(
  selectYoutube,
  (state: YoutubeState): string => state.token,
);

export const selectNextPage = createSelector(
  selectYoutube,
  (state: YoutubeState): string => state.page.next,
);

export const selectItems = createSelector(
  selectCustomItems,
  selectYoutubeItems,
  (customItems, youtubeItems) => [...customItems, ...youtubeItems],
);

export const selectItemById = (id: string) =>
  createSelector(selectItems, (items) => items.find((item) => item.id === id));

export const selectBooleanByIdPresenceInFav = (id: string) =>
  createSelector(selectFavIds, (items) => items.includes(id));
