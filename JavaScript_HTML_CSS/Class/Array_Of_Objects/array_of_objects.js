class Car{

    /**
     * @param {string} car_model @param {string} car_color 
     */
    constructor(car_model, car_color){
        this.model = car_model;
        this.color = car_color;
    }

    drive(){
        console.log(`You drive the ${this.model}`);
        document.write(`<br>You drive the ${this.model}`)
    }
}

let car_1 = new Car("Corvette", "Blue");
let car_2 = new Car("Mustange", "Red");
let car_3 = new Car("Lambo", "Yellow");

/**
 * @description Array of objects is just a array that contains the objects created by a class
 */
let garage = [car_1, car_2, car_3];





/*---------------------------------------------------*/
for(let i = 0; i < garage.length; i++){
    garage[i].drive();
}