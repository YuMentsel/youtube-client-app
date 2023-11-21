import { createReducer, on } from '@ngrx/store';
import {
  addToFavIds,
  createCustomItem,
  fetchItems,
  getPageInfo,
  getPageToken,
  removeCustomItem,
  removeFromFavIds,
} from '../actions/youtube.action';
import { YoutubeState } from '../models/state.model';
import { getLsCustomCards } from '../../helpers';

export const initialState: YoutubeState = {
  customItems: getLsCustomCards(),
  youtubeItems: [],
  favIds: [],
  page: { next: '', prev: '' },
  token: '',
};

export const youtubeReducer = createReducer(
  initialState,
  on(
    createCustomItem,
    (state, { customItem }): YoutubeState => ({
      ...state,
      customItems: [customItem, ...state.customItems],
    }),
  ),
  on(
    removeCustomItem,
    (state, { id }): YoutubeState => ({
      ...state,
      customItems: state.customItems.filter((item) => item.id !== id),
    }),
  ),
  on(addToFavIds, (state, { id }): YoutubeState => ({ ...state, favIds: [...state.favIds, id] })),
  on(
    removeFromFavIds,
    (state, { id }): YoutubeState => ({
      ...state,
      favIds: state.favIds.filter((favId) => favId !== id),
    }),
  ),
  on(fetchItems, (state, { youtubeItems }): YoutubeState => ({ ...state, youtubeItems })),
  on(getPageInfo, (state, { page }): YoutubeState => ({ ...state, page: { ...page } })),
  on(getPageToken, (state, { token }): YoutubeState => ({ ...state, token })),
);
