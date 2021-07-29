import { TableState, TABLE_KEY, tableReducer } from './table';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { filterReducer, FilterState, FILTER_KEY } from './filter';
import { FormState, formReducer, LAST_DATA_KEY } from './form';
import { NotificationState, NOTIFICATION_KEY, notificationReducer } from './notifications';

export interface State {
  [LAST_DATA_KEY]: FormState;
  [NOTIFICATION_KEY]: NotificationState;
  [FILTER_KEY]: FilterState;
  [TABLE_KEY]: TableState;
}

export const reducers: ActionReducerMap<State> = {
  [LAST_DATA_KEY]: formReducer,
  [NOTIFICATION_KEY]: notificationReducer,
  [FILTER_KEY]: filterReducer,
  [TABLE_KEY]: tableReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
