import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { FormState, formReducer, LAST_DATA_KEY } from './form';

export interface State {
  [LAST_DATA_KEY]: FormState;
}

export const reducers: ActionReducerMap<State> = {
  [LAST_DATA_KEY]: formReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
