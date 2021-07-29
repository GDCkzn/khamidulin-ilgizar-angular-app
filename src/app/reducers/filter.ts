import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const FILTER_KEY = 'Filter';

export const filterTable = createAction('[FILTERSTATUS] filter',
    props<{status: string}>()
);

export interface FilterState{
    status: string
}

export const initialState: FilterState = {
    status: "All",
};

export const filterReducer = createReducer(
    initialState,
    on(filterTable, (state, action) => ({
        ...state, 
        status: action.status
    }))
);

export const featureSelector 
    = createFeatureSelector<FilterState>(FILTER_KEY);
export const filterSelector = createSelector(
    featureSelector,
    state => state.status
);