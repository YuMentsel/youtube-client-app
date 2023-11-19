import { createReducer, on } from '@ngrx/store';
import { createCustomItem, fetchItems } from '../actions/youtube.action';
import { YoutubeState } from '../models/state.model';

export const initialState: YoutubeState = {
  customItems: [],
  youtubeItems: [],
};

export const youtubeReducer = createReducer(
  initialState,
  on(
    createCustomItem,
    (state, { customItem }): YoutubeState => ({
      ...state,
      customItems: [...state.customItems, customItem],
    }),
  ),
  on(fetchItems, (state, { youtubeItems }): YoutubeState => ({ ...state, youtubeItems })),
);
