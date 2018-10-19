import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ScheduleAction from '../actions/schedule.action';
import { map, switchMap } from 'rxjs/operators';
import { Schedule, ScheduleApiService } from '@factoring-apis';

@Injectable()
export class ScheduleEffects {

  @Effect()
  load$ = this._actions$.pipe(
    ofType(ScheduleAction.ScheduleActionTypes.Load),
    switchMap(() => this._schedule.getSchedule()),
    map((schedules: Schedule[]) =>
      new ScheduleAction.LoadSuccess({data: schedules}))
  );

  constructor(private _actions$: Actions,
              private _schedule: ScheduleApiService) {
  }
}
