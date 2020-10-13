import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    heroes: reducers.HeroesState
}

export const appReducers: ActionReducerMap<AppState> = {
    heroes: reducers.heroesReducer
}