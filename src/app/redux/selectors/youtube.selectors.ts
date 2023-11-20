import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Item } from '../../youtube/models/search-item.model';
import { YoutubeState } from '../models/state.model';

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

export const selectItems = createSelector(
  selectCustomItems,
  selectYoutubeItems,
  (customItems, youtubeItems) => [...customItems, ...youtubeItems],
);

export const selectItemById = (id: string) =>
  createSelector(selectItems, (items) => items.find((item) => item.id === id));

export const selectBooleanByIdPresenceInFav = (id: string) =>
  createSelector(selectFavIds, (items) => items.includes(id));
