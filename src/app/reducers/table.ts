import { TaskElement } from './../services/data-service.service';
import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const TABLE_KEY = 'Table';

export const addToTable = createAction('[TABLE] add',
    props<{data: TaskElement[]}>()
);

export interface TableState{
    data: TaskElement[]
}

export const initialState: TableState = {
    data: []
};

export const tableReducer = createReducer(
    initialState,
    on(addToTable, (state, action) => ({
        ...state,
        data: action.data
    }))
);

export const featureSelector 
    = createFeatureSelector<TableState>(TABLE_KEY);
    
export const tasksSelector = createSelector(
    featureSelector,
    state => state.data
);
