import { Car } from './car';
import {Component} from '@angular/core';
// import {CarsService} from './cars.service'
// import { Car } from './car';
@Component({
    selector: 'cars-form',
    templateUrl: './cars.form.component.html'
})

export class CarsFormComponent {
    public type : string[];
    public model : string;
    public price: number; 
    public img?: string;

    constructor(){
        this.type=["Children Car","Real Car","Souvenir Car"];
        this.model="e46";
        this.price = 5;
        this.img="https://cdn.shopify.com/s/files/1/0154/5079/products/IMG3032_3_1024x1024.jpg?v=1437630399";
        
    }

}