let studentsAges = [16, 17, 18, 19, 20]

/**
 * @param {number} value @param {number} index @param {number[]} array @returns 
 */
function checkAge18(value, index, array){ //you don't need to put all three arguments: array[index] = value

    if (value >= 18){
        return array[index];
    }
}

let adultStudents = studentsAges.filter(checkAge18);

console.log(`Adult Stundent ${adultStudents}`);


//-------------------------------------------------------------------------------------------------
//Arrow function style

studentsAges = [16, 17, 18, 19, 20]

adultStudents = studentsAges.filter(value => value >= 18);

document.write(`Adult Stundent ${adultStudents}`);