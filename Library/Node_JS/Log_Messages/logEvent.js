//dependecies imports
const { format } = require('date-fns');
const { v4: uuid} = require('uuid');

//Node.js Imports into variables
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

//Apends a id, date and Hour a message
const logEvents = async(message) => {


    //Hour and date format message
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;

    //Full message with id, dateTime the message input
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    console.log(logItem);

    try{
        //creates a new directory if the folder 'logs don't exist'
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        /*  appends the full message inside the file 'eventLog.txt'
         *  if the file don't exist, a new file 'eventLog.txt' will be created
         */
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);

    } catch(err){

        console.log(err);
    }
}

//exports LogEvents
module.exports = logEvents