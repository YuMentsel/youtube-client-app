import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Id } from '../models/search-item.model';
import { maxResults } from '../../constants/constants';
import { Response } from '../models/search-response.model';
import { fetchSearchItems, getPageInfo } from '../../redux/actions/youtube.action';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  pageToken$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  customCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  isResults = false;

  constructor(
    private httpClient: HttpClient,
    private store: Store,
  ) {}

  getIdsByValue(query: string): Observable<Response<Id>> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxResults - this.customCount$.getValue())
      .set('pageToken', this.pageToken$.getValue())
      .set('q', query);

    return this.httpClient.get<Response<Id>>('search', { params }).pipe(
      map((res: Response<Id>) => {
        this.store.dispatch(
          getPageInfo({ page: { next: res.nextPageToken || '', prev: res.prevPageToken || '' } }),
        );
        return res;
      }),
    );
  }

  getById(id: string): Observable<Response<string>> {
    const params = new HttpParams().set('id', id).set('part', 'snippet,statistics');
    return this.httpClient.get<Response<string>>('videos', { params });
  }

  getNewPage() {
    this.store.dispatch(fetchSearchItems({ value: this.searchValue$.getValue() }));
  }
}
