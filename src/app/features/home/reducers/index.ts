import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSchedule from './schedule.reducer';

export const featureName = 'home';

export interface State {
  schedule: fromSchedule.State;
}

export const reducers: ActionReducerMap<State> = {
  schedule: fromSchedule.reducer
};

export const selectHomeState = createFeatureSelector<State>(featureName);

export const getSchedule = createSelector(selectHomeState, state => state.schedule);
