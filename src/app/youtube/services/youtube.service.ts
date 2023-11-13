import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map, mergeMap, switchMap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Item } from '../models/search-item.model';
import { maxResults, minSearchLength } from '../../constants/constants';
import { SearchResponse, Response } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  items: Item[] = [];

  isResults = false;

  searchItems$: Observable<Item[]> = this.searchValue$.pipe(
    filter((value) => value.length >= minSearchLength),
    mergeMap((query) => this.getIdsByValue(query)),
    switchMap((ids) => this.getById(ids)),
  );

  constructor(private httpClient: HttpClient) {}

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

  getById(id: string): Observable<Item[]> {
    const params = new HttpParams().set('id', id).set('part', 'snippet,statistics');

    return this.httpClient.get<Response>('videos', { params }).pipe(map((result) => result.items));
  }

  getDetailsById(id: string): Item | undefined {
    return this.items.find((item) => item.id === id);
  }
}
