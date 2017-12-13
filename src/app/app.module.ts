import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { appRoutes } from './router';

//Components
import { AppComponent } from './app.component';
import {CarsComponent} from './cars/cars.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';

//Services
import {CarsService} from './cars/cars.service';
import { AuthService } from './auth/auth.service';
import { HttpService } from './auth/http.service';


@NgModule({
  declarations: [

    AppComponent,
    CarsComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    CarsService,
    AuthService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
