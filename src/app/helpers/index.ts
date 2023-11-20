import { Item } from '../youtube/models/search-item.model';

export const getLsCustomCards = (): Item<string>[] => {
  const customItemString = localStorage.getItem('cards');
  return customItemString ? JSON.parse(customItemString) : [];
};
