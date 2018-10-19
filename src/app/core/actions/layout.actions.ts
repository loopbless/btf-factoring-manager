import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  Selected = '[Layout] Selected',
}

export class Selected implements Action {
  readonly type = LayoutActionTypes.Selected;

  constructor(public payload: { item: any }) {
  }
}


export type LayoutActions = Selected;
