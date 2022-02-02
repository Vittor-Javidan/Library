let myName = "Vittor Javidan";

console.log(myName)

console.log(`Lenght: ${myName.length}`);
console.log(`Char at 0: ${myName.charAt(0)}`);
console.log(`Index of "r": ${myName.indexOf("r")}`);
console.log(`Last index of "a": ${myName.lastIndexOf("a")}`);
console.log(`To upper case: ${myName.toUpperCase()}`);
console.log(`To lower case: ${myName.toLowerCase()}`);
console.log(`Slice first name: ${myName.slice(   0, myName.indexOf(" ")    )}`);
console.log(`Slice last name: ${myName.slice(   myName.lastIndexOf(" ") + 1   )}`);
console.log(`Replace 'a' for '@': ${myName.replace("a", "@")}`)
console.log(`Replace all 'a' for '@': ${myName.replaceAll("a", "@")}`)

myName = "     Vittor Javidan       ";
console.log(`Trim name ${myName}: ${myName.trim()}`);

let myStreet = "Mordor";
let myCity = "Middle Earth";

console.log(`Concat: ${myStreet.concat(` ${myCity}`)}`);

document.write(`Press F12 to check the console`);