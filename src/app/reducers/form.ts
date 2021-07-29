import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const LAST_DATA_KEY = 'LastData';

export const add = createAction('[FORM] add',
    props<{name: string, description:string, date: number, status: string}>()
);

export interface FormState{
    name: string;
    description: string;
    date: number;
    status: string;
}

export const initialState: FormState = {
    name: "",
    description: "",
    date: 0,
    status: "All"
};

export const formReducer = createReducer(
    initialState,
    on(add, (state, action) => ({
        ...state, 
        name: action.name,
        description: action.description,
        date: action.date,
        status: action.status
    }))
);

export const featureSelector 
    = createFeatureSelector<FormState>(LAST_DATA_KEY);

export const statusSelector = createSelector(
    featureSelector,
    state => state.status
);