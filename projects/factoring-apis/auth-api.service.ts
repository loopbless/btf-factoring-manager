import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Auth {
  username: string;
  password: string;
}

@Injectable()
export class AuthApiService {
  constructor(private httpClient: HttpClient) {
  }

  login(auth: Auth) {
    return this.httpClient.get('/oauth/token', {
      params: auth as any
    });
  }
}
