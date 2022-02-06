let numbers = ["A", 3, 14, "C", 1, 2, "B", 5];
let numbers_2 = numbers;

//Reverse array: array.reverse()
console.log(`Numbers_2 reversed: ${numbers_2.reverse()}`);
console.log(`Numbers: ${numbers}`);
console.log("---------------------------------------------------------------");
console.log(" ");

//Ascending ASCII: array.sort()
console.log(`Numbers_2 ASCII: ${numbers_2.sort()}`); 
console.log(`Numbers: ${numbers}`);
console.log("---------------------------------------------------------------");
console.log(" ");

//Asceding numeric: array.sort((a, b) => a - b)
console.log(`Numbers_2 Asc: ${numbers_2.sort((a, b) => a - b)}`); 
console.log(`Numbers: ${numbers}`)
console.log("---------------------------------------------------------------");
console.log(" ");

//Descending numeric : array.sort((a, b) => b - a)
console.log(`Numbers_2 Desc: ${numbers_2.sort((a, b) => b - a)}`); 
console.log(`Numbers: ${numbers}`);
console.log("---------------------------------------------------------------");
console.log(" ");

/* IMPORTANT!!!

    All these sort methods actualy modify the main array!! Even if you storage in another variable and 
    do the process just in this new variable.

    If you don't want to change your main array, insert all elements into a new array using a
    lop, for each element inside the original array
*/

    //Solving the issue example:

        function copyArray(array) {

            //Receives an array and returns a new array   
             
            let temp_array = [];

            for (let i = 0; i < array.length; i++){
                temp_array.push(array[i]);
            } 
            return temp_array;
        }


        //Data to test the function above ------------------------------------------------------------

        numbers = ["A", 3, 14, "C", 1, 2, "B", 5];
        numbers_2 = copyArray(numbers); 

        console.log(numbers);
        console.log(numbers_2);

        console.log(numbers);
        console.log(numbers_2.reverse());


    //(Copy and past this block of code into your IDE to see)

document.write(`Press F12 to check the console`)