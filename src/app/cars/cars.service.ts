import { Car } from './car';
import { cars } from '../data';
import {Injectable} from '@angular/core';

@Injectable()
export class CarsService {
    
    getAllCars(): Car[] {
        return cars;
    }
}