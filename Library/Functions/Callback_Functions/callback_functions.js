/**
 * @param {string} output 
 */
function displayConsole(output){
    console.log(output);
}

/**
 * @param {string} output 
 */
function displayDOM(output) {
    document.getElementById("myH1").innerHTML = output;
}

/**
 * @description Callback fuctions are functions that can be pass as arguments!
 * @param {string} text @param {Function} callback 
 */
function setMessage(text, callback){
    message = text;
    callback(message);
}

let message;





/*-------------------------------------------------------------------------------*/
setMessage("Hi mom!", displayDOM);
setMessage("Hi mom!", displayConsole);

