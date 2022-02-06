/*
    If you don't want  to modify the main array, the safest way to copy a array is through a function
    with a responsabily to copy each element inside another array. If you don't do that, methods like
    sort or reverse will change the main array, even when you create another variables and put the main
    array directly into.
*/

/**
 * @param {array} array @returns 
 */
function copyArray(array) {
     
    let temp_array = [];

    for (let i = 0; i < array.length; i++){
        temp_array.push(array[i]);
    } 
    return temp_array;
}

let numbers_letters_array = ["A", 3, 14, "C", 1, 2, "B", 5];
let numbers_letters_array_copy = copyArray(numbers_letters_array); 

console.log(`Original Array: ${numbers_letters_array}`)
console.log(`Array copy: ${numbers_letters_array_copy}`)
document.write(`<br>Original Array: ${numbers_letters_array}`);
document.write(`<br>Array copy: ${numbers_letters_array_copy}`);

console.log(`Original Array: ${numbers_letters_array}`)
console.log(`Reversed Array copy: ${numbers_letters_array_copy.reverse()}`)
document.write(`<br>Original Array: ${numbers_letters_array}`);
document.write(`<br>Reversed Array copy: ${numbers_letters_array_copy}`);