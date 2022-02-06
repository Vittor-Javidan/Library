// Example 1 ------------------------------------------------------

const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) =>{
    if(err) throw err;
    console.log(data.toString());
})


fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you',(err) =>{
    if(err) throw err;
    console.log(`Write complete`);

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n Nice to meet you too',(err) =>{
        if(err) throw err;
        console.log(`append complete`);

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'new_reply.txt'),(err) =>{
            if(err) throw err;
            console.log(`rename complete`);
        })
    })
})


// Example 2 ------------------------------------------------------

const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {

    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);

        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'starter.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'starter.txt'), '\n\nNice to meet you');
        await fsPromises.rename(path.join(__dirname, 'files', 'starter.txt'), path.join(__dirname, 'files', 'new_starter.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'new_starter.txt'), 'utf8');
        console.log(newData);
        
    } catch (err) {
        console.error(err);
    }

}

fileOps();

// Creating a directory -----------------------------------------

const { dir } = require('console');
const fs = require('fs');

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created');
    });
}

if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory deleted');
    });
}