import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public user: object = { name: '', password: '' };
    
    constructor(private authService: AuthService) { }

    ngOnInit() {

    }

    submit() {
        
        this.authService.login(this.user).subscribe(data=>console.log(data));
    }
}

