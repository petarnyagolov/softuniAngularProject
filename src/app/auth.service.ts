import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private httpService:  Http) { }

  get() {
    return this.httpService.get('https://www.google.bg/')
  }
}
