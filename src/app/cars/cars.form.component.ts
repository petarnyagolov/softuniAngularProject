import { Car } from './car';
import {Component} from '@angular/core';
// import {CarsService} from './cars.service'
// import { Car } from './car';
@Component({
    selector: 'cars-form',
    templateUrl: './cars.form.component.html'
})

export class CarsFormComponent {
    public types : string[];
    public model : string;
    public price: number; 
    public img?: string;

    constructor(){
        this.types=["Children Car","Real Car","Souvenir Car"];
        console.log(this.types);
        this.model="";
        this.price = 0;
        this.img="https://cdn.shopify.com/s/files/1/0154/5079/products/IMG3032_3_1024x1024.jpg?v=1437630399";
        
    }

}