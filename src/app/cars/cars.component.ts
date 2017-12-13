import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service'
import { Car } from './car';
@Component({
    selector: 'cars',
    templateUrl: './cars.component.html',
    providers:[CarsService]
})

export class CarsComponent implements OnInit {
cars : Car[]


constructor(
    private carsService: CarsService
){}

    ngOnInit(): void {
      this.cars=this.carsService.getAllCars();
      console.log(this.cars);
    }
}