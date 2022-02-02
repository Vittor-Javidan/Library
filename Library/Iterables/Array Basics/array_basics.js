let cars = ["Mustang", "Corvette", "Jaguar"]; //Array syntax

let car_1 = cars[0]; //Return value of an index
let car_2 = cars[1];
let car_3 = cars[2];

let number_of_cars = cars.length //returns array lengh
document.write(`Lenght: ${number_of_cars}`);

cars.push("Tesla"); //add an element
console.log(`Push: ${cars}`)
document.write(`<br>Push: ${cars}`);

cars.pop(); //removes last element
console.log(`Pop: ${cars}`)
document.write(`<br>Pop: ${cars}`);

cars = cars.sort(); //sort elements
console.log(`Sort: ${cars}`)
document.write(`<br>Sort: ${cars}`);

cars = cars.reverse(); //reverse sort elements
console.log(`Reverse: ${cars}`)
document.write(`<br>Reverse: ${cars}`);