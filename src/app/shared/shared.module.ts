import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzZorroModule } from './nz-zorro.module';
import { FactoringApisModule } from '@factoring-apis';
import { ReactiveFormsModule } from '@angular/forms';
import { interceptors } from './services/interceptors';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    NzZorroModule,
    FactoringApisModule,
    ReactiveFormsModule,
  ],
  providers: [
    interceptors
  ]
})
export class SharedModule { }
