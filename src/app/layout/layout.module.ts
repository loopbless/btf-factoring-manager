import { NgModule } from '@angular/core';
import { LayoutPageComponent } from './containers/layout-page/layout-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [LayoutPageComponent],
  exports: [LayoutPageComponent]
})
export class LayoutModule { }
