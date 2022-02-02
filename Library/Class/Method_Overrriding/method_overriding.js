class Vehicle{

    /**
     * @description Original drive() method from Vehicle Parent Class.
     */
    drive(){
        console.log("You drive the vehicle")
    }
}

class Car extends Vehicle{

    /**
     * @description Overriden drive() method from Vehicle Parent Class.
     */
    drive(){
        console.log("You drive the car")
    }
}

class RaceCar extends Car{

    /**
     * @description Overriden drive() method from Vehicle Parent Class.
     */
    drive(){
        console.log("You drive the race Carrrrrrrrr!!")
    }
}

let vehicle_object = new Vehicle();
let car_object = new Car();
let raceCar_object = new RaceCar();





/*----------------------------------------------------------------*/
vehicle_object.drive();
car_object.drive();
raceCar_object.drive();