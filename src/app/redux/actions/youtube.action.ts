import { createAction, props } from '@ngrx/store';
import { Item } from '../../youtube/models/search-item.model';

export enum ActionTypes {
  create = '[CustomItem] Create',
  fetch = '[YoutubeItem] Fetch',
}

export const createCustomItem = createAction(
  ActionTypes.create,
  props<{ customItem: Item<string> }>(),
);

export const fetchItems = createAction(
  ActionTypes.fetch,
  props<{ youtubeItems: Item<string>[] }>(),
);
