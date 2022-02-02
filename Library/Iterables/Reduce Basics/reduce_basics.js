/*
Reduce method works similar as a for each loop. The difference is: the array[0] starts inside
a argument while array[1] starts in another. Everytime the code inside this loop is finish,
you return a value wich becomes the new array[0], and array[1] = array[2], array[2] = array[3],
etc, until you reduce the lengh of your iterable by one.

The process will repeate until you have just one single element left
*/

let letters = ["H", "E", "L", "P"]

/**
 * @param {*} value_0 Value from array[0]
 * @param {*} value_1 Value from array[1]
 * @param {*} index Optional - Reduce method can push the current index from the 'array.reduce()'
 * @param {*} array Optional - Reduce method can push the array from the 'array.reduce()'
 * @returns 
 */
function sum_elements(value_0, value_1, index, array) {

    return value_0 + value_1;
}

let word = letters.reduce(sum_elements);

console.log(`Reduced array: ${word}`);


//-------------------------------------------------------------------------------------------------
//Arrow function style

letters = ["H", "E", "L", "P"]

word = letters.reduce((value_0, value_1) => value_0 + value_1);

document.write(`Reduced array: ${word}`);