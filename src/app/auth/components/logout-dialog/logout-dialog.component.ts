import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'fmc-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
