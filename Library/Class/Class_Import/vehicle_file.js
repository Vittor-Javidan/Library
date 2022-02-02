export default class Vehicle{

    /**
     * @param {string} color
     */
    constructor(color){
        this.color = color;
    }

    vehicle_Color(){
        console.log(`This vehicle is ${this.color}`)
    }
}

export class Car extends Vehicle{

    type = `Car`;
    wheels = 4;

    /**
     * @param {string} model - @param {string} color 
     */
    constructor(model, color){
        super(color);
        this.model = model;
    }

    drive(){
        console.log(`This ${this.color} ${this.model} is being drived`)
    }
}