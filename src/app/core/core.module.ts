import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './containers';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule
  ],
  declarations: [NotFoundPageComponent],
  exports: [
    NotFoundPageComponent,
    AuthModule
  ],
  providers: [
  ]
})
export class CoreModule { }
