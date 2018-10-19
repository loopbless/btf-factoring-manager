import * as fromLogin from './login.reducer';
import * as fromUser from './user.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export const featureName = 'auth';

export interface AuthState {
  login: fromLogin.State;
  user: fromUser.State;
}

export interface State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  login: fromLogin.reducer,
  user: fromUser.reducer
};

export const selectAuthState = createFeatureSelector<State, AuthState>(featureName);

export const selectLoginState = createSelector(selectAuthState, state => state.login);

export const getLoginError = createSelector(selectLoginState, fromLogin.getError);

export const getLoginPending = createSelector(selectLoginState, fromLogin.getPending);

export const getUser = createSelector(selectAuthState, state => fromUser.getUser(state.user));

export const getLoggedIn = createSelector(getUser, user => !!user);

