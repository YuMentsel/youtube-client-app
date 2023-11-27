import * as fromReducer from './youtube.reducer';
import * as fromActions from '../actions/youtube.action';
import { customItemMock, youtubeItemsMock } from '../mocks/youtube.mocks';

describe('Youtube Reducer', () => {
  const { initialState, youtubeReducer } = fromReducer;

  it('should handle createCustomItem action', () => {
    const action = fromActions.createCustomItem({ customItem: customItemMock });
    const result = youtubeReducer(initialState, action);
    expect(result.customItems.length).toEqual(1);
    expect(result.customItems).toContain(customItemMock);
  });

  it('should handle removeCustomItem action', () => {
    const id = 'test-custom-id';
    const action = fromActions.removeCustomItem({ id });

    const result = youtubeReducer(initialState, action);
    expect(result.customItems.some((item) => item.id === id)).toBeFalsy();
  });

  it('should handle addToFavIds action', () => {
    const id = 'test-youtube-id';
    const action = fromActions.addToFavIds({ id });

    const result = youtubeReducer(initialState, action);
    expect(result.favIds).toContain(id);
  });

  it('should handle removeFromFavIds action', () => {
    const id = 'test-youtube-id';
    const action = fromActions.removeFromFavIds({ id });

    const result = youtubeReducer(initialState, action);
    expect(result.favIds.some((favId) => favId === id)).toBeFalsy();
  });

  it('should handle fetchItems action', () => {
    const action = fromActions.fetchItems({ youtubeItems: youtubeItemsMock });
    const result = youtubeReducer(initialState, action);

    expect(result.youtubeItems).toEqual(youtubeItemsMock);
  });

  it('should handle getPageInfo action', () => {
    const pageInfo = { next: 'nextPageToken', prev: 'prevPageToken' };
    const action = fromActions.getPageInfo({ page: pageInfo });

    const result = youtubeReducer(initialState, action);
    expect(result.page).toEqual(pageInfo);
  });

  it('should handle getPageToken action', () => {
    const token = 'token';
    const action = fromActions.getPageToken({ token });

    const result = youtubeReducer(initialState, action);
    expect(result.token).toEqual(token);
  });
});
