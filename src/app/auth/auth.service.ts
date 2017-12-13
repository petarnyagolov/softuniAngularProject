import { Subject } from 'rxjs/Rx';
import {Injectable} from '@angular/core';

import { HttpService } from './http.service';




@Injectable()
export class AuthService {
    public user: Subject<any> = new Subject();
    constructor( private httpService: HttpService){
        
    }
    
    login(credentials) {
        console.log("login")
      return this.httpService.post("stats/test",credentials)
    }

    register(user) {
        console.log("register")
      return this.httpService.post("stats/testPost",user)
    }
}