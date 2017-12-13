import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    public user: object = { name: '', password: '' };
    
    constructor(private authService: AuthService) { }

    ngOnInit() {

    }

    submit() {
        
        this.authService.register(this.user).subscribe(data=>console.log(data));
    }
}

