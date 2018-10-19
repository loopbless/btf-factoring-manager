import { Action } from '@ngrx/store';
import { Schedule } from '@factoring-apis';

export enum ScheduleActionTypes {
  Load = '[Home/Schedule] Load',
  LoadSuccess = '[Home/Schedule] Load Success',
  LoadFailure = '[Home/Schedule] Load Failure',
}

export class Load implements Action {

  readonly type: string = ScheduleActionTypes.Load;
}

export class LoadSuccess implements Action {

  readonly type: string = ScheduleActionTypes.LoadSuccess;

  constructor(public payload: { data: Schedule[] }) {
  }
}

export class LoadFailure implements Action {

  readonly type: string = ScheduleActionTypes.LoadFailure;

  constructor(public payload: { error: any }) {
  }
}

export type ScheduleActions = Load
  | LoadSuccess
  | LoadFailure;
