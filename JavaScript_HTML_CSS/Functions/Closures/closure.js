let score = (function(){ 

    //saved data
    let points = 0; 

    //function wich modifies data
    return function(){ 
        points += 1 
        return points
    }

})();

document.write(`<br>Score : ${score()}`);
document.write(`<br>Score : ${score()}`);
document.write(`<br>Score : ${score()}`);
console.log(`Score : ${score()}`);
console.log(`Score : ${score()}`);
console.log(`Score : ${score()}`);


/*
Closure is a function with preserved data.

The procedure of returning a function, makes the function code works.
In this example the function add by 1 the local variable points, and return
"points" again. 
*/