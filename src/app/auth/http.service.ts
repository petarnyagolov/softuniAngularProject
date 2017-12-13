import { Injectable } from '@angular/core';
import { Http } from "@angular/http";




@Injectable()
export class HttpService {
    private baseUrl = "http://localhost:5000/";
    constructor(private http: Http) {

    }

    get(url: string) {
  
        return this.http.get(`${this.baseUrl}${url}`);
    }
    post(url, data) {
        return this.http.post(`${this.baseUrl}${url}`, data);
    }
}