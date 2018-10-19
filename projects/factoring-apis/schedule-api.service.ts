import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Schedule {
  id: string;
  title: string;
  content: string;
}

@Injectable()
export class ScheduleApiService {
  constructor(private httpClient: HttpClient) {
  }

  getSchedule(): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>('/schedule');
  }
}
