import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, switchMap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchItem } from '../models/search-item.model';
import { maxResults } from '../../constants/constants';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  isResults = false;

  constructor(private httpClient: HttpClient) {}

  searchItems$: Observable<SearchItem[]> = this.searchValue$.pipe(
    mergeMap((query) => this.getIdsByValue(query)),
    switchMap((ids) => this.getById(ids)),
  );

  getIdsByValue(query: string): Observable<string> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxResults)
      .set('q', query);

    return this.httpClient
      .get<SearchResponse>('search', { params })
      .pipe(map((res: SearchResponse) => res.items.map((item) => item.id.videoId).join(',')));
  }

  getById(id: string): Observable<SearchItem[]> {
    const params = new HttpParams().set('id', id).set('part', 'snippet,statistics');

    return this.httpClient
      .get<SearchResponse>('videos', { params })
      .pipe(map((result) => result.items));
  }
}
