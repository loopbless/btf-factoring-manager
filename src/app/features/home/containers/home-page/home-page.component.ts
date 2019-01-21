import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromSchedule from '../../reducers/schedule.reducer';
import { getSchedule } from '../../reducers';
import * as ScheduleAction from '../../actions/schedule.action';

@Component({
  selector: 'fmc-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

  schedule$ = this._store$.pipe(select(getSchedule));

  constructor(private _store$: Store<fromSchedule.State>) {
  }

  ngOnInit() {
    this._store$.dispatch(new ScheduleAction.Load());
  }

}
