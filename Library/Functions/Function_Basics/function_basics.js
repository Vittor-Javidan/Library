/**
 * @param {string} name @param {number} age 
 */
function say_Hello(name, age){
    console.log(`Hello ${name}`);
    document.write(`<br>Hello ${name}`);
    console.log(`You are ${age} years old`);
    document.write(`<br>You are ${age} years old`);
};

let my_Name = "Vittor";
let my_age = 21;

say_Hello(my_Name, my_age);