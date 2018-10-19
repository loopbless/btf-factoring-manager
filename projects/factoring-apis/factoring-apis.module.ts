import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthApiService } from './auth-api.service';
import { AccountApiService } from './account-api.service';
import { ScheduleApiService } from './schedule-api.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AuthApiService,
    AccountApiService,
    ScheduleApiService
  ],
})
export class FactoringApisModule {
}
