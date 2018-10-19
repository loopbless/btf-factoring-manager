import { User } from '@factoring-apis';
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export interface State {
  user: User;
}

export const initialState: State = {
  user: null
};

export function reducer(
  state = initialState,
  action: AuthActions
): State {
  switch (action.type) {
    case AuthActionTypes.LogoutSuccess: {
      return initialState;
    }

    case AuthActionTypes.LoginSuccess: {
      return {
        ...initialState,
        user: action.payload.user
      };
    }

    default: {
      return state;
    }
  }
}

export const getUser = (state: State) => state.user;
