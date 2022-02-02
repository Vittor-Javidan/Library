let symbol = window.prompt("Enter a simbol to use");
let columns = Number(window.prompt("How many columns"));
let rows = Number(window.prompt("How many hows"));


for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
        myRectangle.innerHTML += symbol;
    }
    myRectangle.innerHTML += "<br>";
}