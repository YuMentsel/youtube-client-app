import { customItemsMock, youtubeItemsMock, youtubeStateMock } from '../mocks/youtube.mocks';
import * as fromSelectors from './youtube.selectors';

describe('Youtube Selectors', () => {
  it('should select youtube items', () => {
    const result = fromSelectors.selectYoutubeItems.projector(youtubeStateMock);
    expect(result).toEqual(youtubeItemsMock);
  });

  it('should select custom items', () => {
    const result = fromSelectors.selectCustomItems.projector(youtubeStateMock);
    expect(result).toEqual(customItemsMock);
  });

  it('should select fav ids', () => {
    const result = fromSelectors.selectFavIds.projector(youtubeStateMock);
    expect(result).toEqual(['test-youtube-id-2']);
  });

  it('should select custom items length', () => {
    const result = fromSelectors.selectCustomLength.projector(youtubeStateMock);
    expect(result).toEqual(2);
  });

  it('should select prevPage', () => {
    const result = fromSelectors.selectPrevPage.projector(youtubeStateMock);
    expect(result).toEqual('prevPageToken');
  });

  it('should select nextPage', () => {
    const result = fromSelectors.selectNextPage.projector(youtubeStateMock);
    expect(result).toEqual('nextPageToken');
  });

  it('should select page', () => {
    const result = fromSelectors.selectPage.projector(youtubeStateMock);
    expect(result).toEqual({ next: 'nextPageToken', prev: 'prevPageToken' });
  });

  it('should select token', () => {
    const result = fromSelectors.selectToken.projector(youtubeStateMock);
    expect(result).toEqual('token');
  });

  it('should select all items', () => {
    const result = fromSelectors.selectItems.projector(
      youtubeStateMock.customItems,
      youtubeStateMock.youtubeItems,
    );
    expect(result).toEqual([...customItemsMock, ...youtubeItemsMock]);
  });

  it('should select item by id', () => {
    const result = fromSelectors
      .selectItemById('test-youtube-id-2')
      .projector([...customItemsMock, ...youtubeItemsMock]);
    expect(result).toEqual(youtubeItemsMock[1]);
  });

  it('should select boolean by id presence in fav', () => {
    const result = fromSelectors
      .selectBooleanByIdPresenceInFav('test-youtube-id-2')
      .projector(youtubeStateMock.favIds);
    expect(result).toEqual(true);
  });
});
