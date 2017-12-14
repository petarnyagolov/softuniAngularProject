export class Car {
    type: string;
    model : string;
    price : number;
    img? : string;

    constructor(type : string, model : string, price : number, img : string){
        this.type = type;
        this.model=model;
        this.price = price;
        this.img=img;
        
    }
}