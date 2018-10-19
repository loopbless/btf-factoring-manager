import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export interface State {
  error: any;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false
};

export function reducer(
  state = initialState,
  action: AuthActions
): State {
  switch (action.type) {
    case AuthActionTypes.Login: {
      return {
        error: null,
        pending: true,
      };
    }

    case AuthActionTypes.LoginSuccess: {
      return initialState;
    }

    case AuthActionTypes.LoginFailure: {
      return {
        error: action.payload.error,
        pending: false
      };
    }
    default:
      return state;
  }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
