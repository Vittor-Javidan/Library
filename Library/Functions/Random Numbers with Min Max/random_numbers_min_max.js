/**
 * @param {number} min_value @param {number} max_value @returns
 */
function getRandomNumber(min_value, max_value){
    return (Math.floor(Math.random()*(max_value - min_value + 1))) + min_value;
}

let a = 10;
let b = 20;
console.log(`Random number between ${a} and ${b}: ${getRandomNumber(a,b)}`);
document.write(`<br>Random number between ${a} and ${b}: ${getRandomNumber(a,b)}`);