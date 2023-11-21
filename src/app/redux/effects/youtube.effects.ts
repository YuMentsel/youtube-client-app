import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';
import { fetchIds, fetchItems, fetchSearchItems } from '../actions/youtube.action';
import { YoutubeService } from '../../youtube/services/youtube.service';

@Injectable()
export class YoutubeEffects {
  fetchItemsIds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchSearchItems),
      mergeMap((search) => this.youtubeService.getIdsByValue(search.value)),
      map((res) => {
        return res.items.map((item) => item.id.videoId).join(',');
      }),
      map((ids) => fetchIds({ ids })),
    );
  });

  fetchItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchIds),
      switchMap((p) => this.youtubeService.getById(p.ids)),
      map((results) => fetchItems({ youtubeItems: results.items })),
    );
  });

  constructor(
    private actions$: Actions,
    private youtubeService: YoutubeService,
  ) {}
}
