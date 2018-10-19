import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: string;
  nickname: string;
  username: string;
}

@Injectable()
export class AccountApiService {

  constructor(private _http: HttpClient) {
  }

  getUser() {
    return this._http.get<User>('/account/user');
  }
}
