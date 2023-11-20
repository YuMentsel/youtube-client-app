import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Item } from '../../youtube/models/search-item.model';
import { Response } from '../../youtube/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor(private httpClient: HttpClient) {}

  getById(id: string): Observable<Item<string>[]> {
    const params = new HttpParams().set('id', id).set('part', 'snippet,statistics');

    return this.httpClient
      .get<Response<string>>('videos', { params })
      .pipe(map((result) => result.items));
  }
}
