/*Importing the function logEvents from logEvents.js
 * OBS: Notice how you don't need to specify the file type
 */
const logEvents = require('./logEvents');

//Just a import from events module
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}; //creating inheritance from EventEmitter
const myEmitter = new MyEmitter(); //creating a object from MyEmitter

//Setting our function inside the log method from myEmitter
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {

    //emits the message using our function above.
    myEmitter.emit('log', 'Log event emitted!')
}, 2000)