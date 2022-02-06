function jump(){
    console.log("You jump!");
    document.write("<br>You jump!");
}
function punch(){
    console.log("You punch!");
    document.write("<br>You punch!");
}
function kick(){
    console.log("You kick!");
    document.write("<br>You kick!");
}
function block(){
    console.log("You block!");
    document.write("<br>You block!");
}

/**
 * @description Array of functions is a array that contain functions, obvious, right?
 * But one thing you need to be aware, and is about the the way you storage the function
 * inside the array. If you try to storage the function jump as "jump()" instead just "jump"
 * you will realize the function will be triggered at the moment of the storage. So, be carefull ^^.
 */
let actions_notation_1 = [jump, punch, kick, block];






/*------------------------------------------------------------*/
for (let i = 0; i < actions_notation_1.length; i++) {
    actions_notation_1[i]();
}

console.log(` `)
document.write(`<br>`)
actions_notation_1.forEach(functions => functions());