import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import * as heroesActions from '../actions/heroes.actions';
import { HeroesService } from '../../shared/services/heroes.service';
import { of } from 'rxjs';

@Injectable()
export class HeroesEffects {

  constructor(
    private actions$: Actions,
    public heroesService: HeroesService
  ) { }

  getHeroes$ = createEffect(
    () => this.actions$.pipe(
      ofType(heroesActions.getHeroes),
      tap(data => console.log(data)),
      mergeMap(
        () => this.heroesService
          .getHeroes()
          .pipe(
            tap(data => console.log(data)),
            map(({total, data}) => heroesActions.getHeroesSuccess({ data, total })),
            catchError(error => of(heroesActions.getHeroesError({ 'payload': error })))
          )
      )
    )
  );
}