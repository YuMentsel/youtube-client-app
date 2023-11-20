import { createReducer, on } from '@ngrx/store';
import { createCustomItem, fetchItems, removeCustomItem } from '../actions/youtube.action';
import { YoutubeState } from '../models/state.model';
import { getLsCustomCards } from '../../helpers';

export const initialState: YoutubeState = {
  customItems: getLsCustomCards(),
  youtubeItems: [],
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
  on(fetchItems, (state, { youtubeItems }): YoutubeState => ({ ...state, youtubeItems })),
);
