import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map, mergeMap, switchMap, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Id, Item } from '../models/search-item.model';
import { maxResults, minSearchLength } from '../../constants/constants';
import { Response } from '../models/search-response.model';
import { fetchItems } from '../../redux/actions/youtube.action';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  isResults = false;

  searchItems$: Observable<Item<string>[]> = this.searchValue$.pipe(
    filter((value) => value.length >= minSearchLength),
    mergeMap((query) => this.getIdsByValue(query)),
    switchMap((ids) => this.getById(ids)),
    tap((items) => this.store.dispatch(fetchItems({ youtubeItems: items }))),
  );

  constructor(
    private httpClient: HttpClient,
    private store: Store,
  ) {}

  getIdsByValue(query: string): Observable<string> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxResults)
      .set('q', query);

    return this.httpClient
      .get<Response<Id>>('search', { params })
      .pipe(map((res: Response<Id>) => res.items.map((item) => item.id.videoId).join(',')));
  }

  getById(id: string): Observable<Item<string>[]> {
    const params = new HttpParams().set('id', id).set('part', 'snippet,statistics');

    return this.httpClient
      .get<Response<string>>('videos', { params })
      .pipe(map((result) => result.items));
  }
}
