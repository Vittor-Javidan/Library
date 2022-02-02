class Car{

    /**
     * @description This is the constructor. Area responsable to handle the arguments when you create
     * a new object.
     * @param {string} car_make String @param {string} car_model String
     * @param {number} car_year Number @param {string} car_color String
     */
    constructor(car_make, car_model, car_year, car_color){
        this.make = car_make;
        this.model = car_model;
        this.year = car_year;
        this.color = car_color;
    }

    /**
     * @description Methods are actions exclusive for objects created by the class and by child class.
     */
    drive(){
        console.log(`You drive the ${this.model}`)
    }

   /**
     * @description Methods are actions exclusive for objects created by the class and by child class.
     */
    break(){
        console.log("You step in the brakes!")
    }
}

/**
 * @description object creation example.
 */
let car_1 = new Car("Ford", "Mustang", 2022, "Red");





/*-----------------------------------------------------------*/
console.log(car_1.make, car_1.model, car_1.year, car_1.color)
car_1.drive();
car_1.break();