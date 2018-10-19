import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as AuthAction from '../actions/auth.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AccountApiService, Auth, AuthApiService } from '@factoring-apis';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this._actions$.pipe(
    ofType<AuthAction.Login>(AuthAction.AuthActionTypes.Login),
    map(data => data.payload.auth),
    switchMap(auth => this._login(auth))
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this._actions$.pipe(
    ofType(AuthAction.AuthActionTypes.LoginSuccess),
    tap(() => this._router.navigate(['/home']))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this._actions$.pipe(
    ofType(
      AuthAction.AuthActionTypes.LoginRedirect,
      AuthAction.AuthActionTypes.Logout
    ),
    tap(authed => {
      this._router.navigate(['/login']);
    })
  );

  constructor(private _actions$: Actions,
              private _router: Router,
              private _accountApi: AccountApiService,
              private _authApi: AuthApiService) {
  }

  private _login(auth: Auth) {
    return this._authApi.login(auth).pipe(
      switchMap(() => this._accountApi.getUser()),
      map(user => new AuthAction.LoginSuccess({user})),
      catchError(error => of(new AuthAction.LoginFailure({error})))
    );
  }
}
