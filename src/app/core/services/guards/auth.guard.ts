import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import * as fromAuth from '../../../auth/reducers';
import * as AuthActions from '../../../auth/actions/auth.actions';
import { select, Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _store$: Store<fromAuth.State>) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this._store$.pipe(
      select(fromAuth.getLoggedIn),
      map(auth => {
        if (!auth) {
          this._store$.dispatch(new AuthActions.LoginRedirect());
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
