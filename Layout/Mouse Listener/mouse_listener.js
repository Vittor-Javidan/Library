/**
 * To use a mouse listener you just neet to use the method 
 * addEventListener in any element form HTML.
 */


let _div = document.getElementById("myDiv");

console.log(_div);

_div.style.backgroundColor = "blue"
_div.style.width = "500px";
_div.style.height = "500px";

/**
 * in the addEventListener, the first argument is the click type,
 * and the second argument is like a function
 * 
 * bewtween the types you have: click, mousedown, mouseup
 * dblclick, mouseover, mouseleave, contextmenu, mousemove
 */
_div.addEventListener("click", e => {
    switch (_div.style.backgroundColor){
        case "blue":{ 
            _div.style.backgroundColor = "red";
            break
        }
        case "red":{ 
            _div.style.backgroundColor = "purple";
            break
        }
        case "purple":{ 
            _div.style.backgroundColor = "teal";
            break
        }
        case "teal":{ 
            _div.style.backgroundColor = "black";
            break
        }
        case "black":{ 
            _div.style.backgroundColor = "blue";
            break
        }
    }
    console.log("click");
})
