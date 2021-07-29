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
    data: [
        {
            name: "Task 1",
            description: "Lorem ipsum",
            date: "28 Jul 2021 13:41",
            status: "Done",
        },
        {
          name: "Task 2",
          description: "Lorem ipsum",
          date: "29 Jul 2021 13:42",
          status: "ToDo",
        },
        {
          name: "Task 3",
          description: "Lorem ipsum",
          date: "9 Jul 2021 13:45",
          status: "InProgress",
        },
        {
          name: "Task 4",
          description: "Lorem ipsum",
          date: "31 Jul 2021 13:46",
          status: "Done",
        }
    ]
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
