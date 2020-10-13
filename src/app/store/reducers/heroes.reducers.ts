import { Action, createReducer, on } from '@ngrx/store';
import { getHeroes, getHeroesSuccess, getHeroesError } from '../actions';
import { Heroe } from '../../shared/classes/heroe';

export interface HeroesState {
    heroes: Heroe[],
    total: number,
    page: number,
    step: number,
    loading: boolean,
    error: any
};

export const heroesInitialState: HeroesState = {
    heroes: [],
    total: 0,
    page: 0,
    step: 20,
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
        total: Math.ceil(total / state.step)
    })),

    on(getHeroesError, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload
    })),

    //function _heroesReducer(heroesInitialState, action) {
    //    switch (action.type) {
    //        case GET_HEROES:
    //            return {
    //                ...state,
    //                loading: true
    //            };
    //        case GET_HEROES_SUCCESS
    //            return {
    //                ...state,
    //                count: state.count - action.payload
    //            };
    //        default:
    //            return state;
    //    }
    //}

);

export function heroesReducer(state: HeroesState, action: Action) {
    return _heroesReducer(state, action);
}