import { createAction, props } from '@ngrx/store';
import { Item } from '../../youtube/models/search-item.model';
import { PageInfo } from '../models/page-info.models';

export enum ActionTypes {
  create = '[CustomItem] Create',
  remove = '[CustomItem] Remove',
  addFav = '[Fav] Add',
  removeFav = '[Fav] Remove',
  fetch = '[YoutubeItem] Fetch',
  fetchIds = '[YoutubeItem] Fetch ids',
  fetchItem = '[YoutubeItem] Fetch item',
  getPageInfo = '[YoutubeItem] get page info ',
}

export const createCustomItem = createAction(
  ActionTypes.create,
  props<{ customItem: Item<string> }>(),
);

export const removeCustomItem = createAction(ActionTypes.remove, props<{ id: string }>());

export const addToFavIds = createAction(ActionTypes.addFav, props<{ id: string }>());

export const removeFromFavIds = createAction(ActionTypes.removeFav, props<{ id: string }>());

export const fetchItems = createAction(
  ActionTypes.fetch,
  props<{ youtubeItems: Item<string>[] }>(),
);

export const fetchSearchItems = createAction(ActionTypes.fetchIds, props<{ value: string }>());

export const fetchIds = createAction(ActionTypes.fetchItem, props<{ ids: string }>());

export const getPageInfo = createAction(ActionTypes.getPageInfo, props<{ page: PageInfo }>());

export const getPageToken = createAction(ActionTypes.getPageInfo, props<{ token: string }>());
