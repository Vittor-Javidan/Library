class Car{

    /**
     * @param {string} car_model @param {string} car_color 
     */
    constructor(car_model, car_color){
        this.model = car_model;
        this.color = car_color;
    }
}

/**
 * @description Object as argument is possible only if your object has the atributes thats requires
 * to make the code inside function works. 
 * @example_ In this example Car has color atribute inside him, and that's allow any
 * object from Car class to use this function. Any other class that has color atribute could use this
 * same function aswell.
 * @param {Car} car Object 
 * @param {string} new_color String
 */
function change_car_color(car, new_color) {
    car.color = new_color;
}

let car_1 = new Car("Corvette", "Blue");





/*--------------------------------------------------------------------------------------*/
change_car_color(car_1, "Purple");
console.log(car_1.color)