/** 
 * To import other files like we do on java or python, when whe create a specific file with a class
 * just to handle object creation, whe need first to import inside the javaScript, like usuall, 
 * and another more few steps.
 *
 * second thing to be aware, is to create <scripts> tags for each file in your HTML code, with a
 * type="module", including the main file.
 *
 * Third and last thing to be aware, is to be sure to have at least one class with a 
 * "export default" before the class name, and "export" before every other class inside the 
 */

import Person, {Student} from './person_file.js';
import Vehicle, { Car } from './vehicle_file.js';


console.log(`From person_file.js------------------------------------`)
console.log(` `)



let person_1 = new Person(`Ana`, 35);
person_1.eat();
person_1.how_old();

let student_1 = new Student(`Mike`, 23, `Computer Science`);
student_1.how_old();
student_1.eat();
student_1.wich_course();



console.log(` `)
console.log(`From vehicle_file.js-----------------------------------`)
console.log(` `)



let vehicle_1 = new Vehicle(`Blue`);
vehicle_1.vehicle_Color();

let car_1 = new Car(`Chevy`, `Red`);
car_1.drive();
car_1.vehicle_Color();