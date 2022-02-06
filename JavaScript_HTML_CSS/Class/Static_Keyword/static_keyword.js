class Car{
    
    /*
        Static keywords are meant to define methods or propertys that belongs only to the class, 
        and not to its objects created.

        Any method or property with a static keyword can only be access by the class, and not by
        the objects created from the class.
    */

    static number_of_cars = 0;

    static begin_Race(){
        console.log("The race has begun!!")
    }

    /**
     * @param {string} car_model 
     */
    constructor(car_model){
        this.model = car_model;
        Car.number_of_cars += 1;
    }
}

let car_1 = new Car("Mustang");
let car_2 = new Car("Corvette");
let car_3 = new Car("Challenger");





/*-------------------------------------------------------------------------------*/
console.log(`Number of cars: ${Car.number_of_cars}`);
Car.begin_Race();