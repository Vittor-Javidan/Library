let total = 0;
let numbers = [ 0, 1, 2, 3];

/**
 * @param {number} element @param {number} index @param {number[]} array 
 */
function multiply_by2(element, index, array){
    array[index] *= 2;
    total += element;
}

numbers.forEach(multiply_by2); //callback function

console.log(`Total: ${total}`);
console.log(`Numbers: ${numbers}`);

document.write(`<br>Total: ${total}`);
document.write(`<br>Numbers: ${numbers}`);