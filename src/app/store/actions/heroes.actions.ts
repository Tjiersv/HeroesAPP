import { createAction, props } from '@ngrx/store';
import { Heroe } from '../../shared/classes/heroe';

export const getHeroes = createAction(
    '[Heroes] GetHeroes'
);

export const getHeroesSuccess = createAction(
    '[Heroes] GetHeroesSuccess',
    props<{ 
        data: Heroe[],
        total: number
     }>()
);

export const getHeroesError = createAction(
    '[Heroes] GetHeroesError',
    props<{ payload: any }>()
);