import { Action, createReducer, on } from '@ngrx/store';
import { getHeroes, getHeroesSuccess, getHeroesError} from '../actions';
import { Heroe } from '../../shared/classes/heroe';

export interface HeroesState {
    heroes: Heroe[],
    total: number,
    loading: boolean
    error: any
};

export const heroesInitialState: HeroesState = {
    heroes: [],
    total: 0,
    loading: false,
    error: null
};

const _heroesReducer = createReducer(heroesInitialState,

    on(getHeroes, state => ({
        ...state,
        loading: true
    })),

    on(getHeroesSuccess, (state, { data, total }) => ({
        ...state,
        loading: false,
        heroes: [...data],
        total
    })),

    on(getHeroesError, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload 
    })),

);

export function heroesReducer(state: HeroesState, action: Action) {
    return _heroesReducer(state, action);
}