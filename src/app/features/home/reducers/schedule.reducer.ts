import { LoadFailure, LoadSuccess, ScheduleActions, ScheduleActionTypes } from '../actions/schedule.action';
import { Schedule } from '@factoring-apis';

export interface State {
  pending: boolean;
  error: any;
  data: Schedule[];
}

const initialState: State = {
  pending: false,
  error: null,
  data: []
};

export function reducer(
  state = initialState,
  action: ScheduleActions
): State {
  switch (action.type) {
    case ScheduleActionTypes.Load: {
      return {
        ...initialState,
        pending: true,
      };
    }

    case ScheduleActionTypes.LoadSuccess: {
      return {
        pending: false,
        error: null,
        data: (<LoadSuccess>action).payload.data
      };
    }

    case ScheduleActionTypes.LoadFailure: {
      return {
        ...initialState,
        error: (<LoadFailure>action).payload.error,
      };
    }

    default: {
      return state;
    }
  }
}
