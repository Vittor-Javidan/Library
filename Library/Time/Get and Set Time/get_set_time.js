date = new Date(0); //Time since Epoch
date = new Date(); //Actual time
date = new Date(2022, 3, 4, 18, 1, 2, 3); //Custom Time (year, month, date, Hour, minutes, seconds, miliseconds)
date = new Date("April 20, 2022 16:20:01:02"); //Custom time String format

//Get Methods -----------------------------------------------------------------------------
let year = date.getFullYear();
let month = date.getMonth();
let dayOfWeek = date.getDay();
let dayOfMonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliseconds = date.getMilliseconds();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day of the Week: ${dayOfWeek}`);
console.log(`Day of the Month: ${dayOfMonth}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds: ${seconds}`);
console.log(`Milliseconds: ${milliseconds}`);
console.log("-------------------------------------------------------------")


//Set Methods -----------------------------------------------------------------------------
date.setFullYear(2030);
date.setMonth(6);
date.setDate(0);
date.setHours(20);
date.setMinutes(33);
date.setSeconds(56);
date.setMilliseconds(10);

year = date.getFullYear();
month = date.getMonth();
dayOfWeek = date.getDay();
dayOfMonth = date.getDate();
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
milliseconds = date.getMilliseconds();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day of the Week: ${dayOfWeek}`);
console.log(`Day of the Month: ${dayOfMonth}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds: ${seconds}`);
console.log(`Milliseconds: ${milliseconds}`);
console.log("-------------------------------------------------------------")

document.write(`Press F12 to check the console`)