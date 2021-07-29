import { createAction, createFeatureSelector, createReducer, on, props } from "@ngrx/store";

export const NOTIFICATION_KEY = 'Notification';

export const pop = createAction('[NOTIFICATIONS] pop',
    props<{count: number}>()
);

export interface NotificationState{
    count: number
}

export const initialState: NotificationState = {
    count: 0,
};

export const notificationReducer = createReducer(
    initialState,
    on(pop, (state, action) => ({
        ...state, 
        count: action.count
    }))
);

export const featureSelector 
    = createFeatureSelector<NotificationState>(NOTIFICATION_KEY);
