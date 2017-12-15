import { RegisterComponent } from './auth/register/register.component';
import { Routes } from "@angular/router";

import {LoginComponent} from "./auth/login/login.component"
import {CarsFormComponent} from "./cars/cars.form.component";


export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {path: 'register',component: RegisterComponent},
    {path: 'addCar',component:CarsFormComponent}
    
];