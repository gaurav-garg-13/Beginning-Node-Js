const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'promiseWrite.txt'), '\n\nNice to meet you.');
        await fsPromises.rename(path.join(__dirname, 'promiseWrite.txt'), path.join(__dirname, 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'promiseComplete.txt'), 'utf8');
        console.log(newData);
    } catch(err){
        console.error(err);
    }
}

const redo = async () =>{
    try{
        await fsPromises.rename(path.join(__dirname, 'promiseComplete.txt'), path.join(__dirname, 'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'starter.txt'), 'Hi, my name is Gaurav');
    } catch(err){
        console.error(err);
    }
}

redo();

/* const fs = require('fs');
fs.readFile('./starer.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
 */
process.on('uncaughtException', err => {
    console.error(`Error: ${err}`);
    process.exit(1);
})