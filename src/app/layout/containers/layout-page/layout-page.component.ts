import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'fmc-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent implements OnInit {

  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}
