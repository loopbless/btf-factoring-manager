import { Action } from '@ngrx/store';
import { Auth, User } from '@factoring-apis';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  Logout = '[Auth] Logout',
  LogoutConfirm = '[Auth] Logout Confirm',
  LogoutSuccess = '[Auth] Logout Success',
  LogoutCancel = '[Auth] Logout Cancel',
  LoginRedirect = '[Auth] Login Redirect',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: { auth: Auth }) {
  }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: { user: User }) {
  }
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: { error: any }) {
  }
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LogoutConfirm implements Action {
  readonly type = AuthActionTypes.LogoutConfirm;
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LogoutSuccess;
}

export class LogoutCancel implements Action {
  readonly type = AuthActionTypes.LogoutCancel;
}

export type AuthActions = Login | LoginSuccess | LoginFailure | LoginRedirect | Logout | LogoutConfirm | LogoutSuccess | LogoutCancel;
