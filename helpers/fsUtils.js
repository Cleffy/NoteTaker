const fs = require('fs');

function readFromFile(file){
    try{
        let response = fs.readFileSync(file, 'utf8');
        console.log('File read successfully');
        return response;
    }
    catch(error){
        console.error(error);
    }
}

function writeToFile(file, content){
    try{
        fs.writeFileSync(file, JSON.stringify(content, null, 4));
        console.log( "File written successfully." );
    }
    catch(error){
        console.error(error);
    }
}

function appendToFile(file, content){
    try{
        let fileContents = fs.readFileSync(file, 'utf8');
        fileContents = JSON.parse(fileContents);
        fileContents.push(content);
        fs.writeFileSync(file, JSON.stringify(fileContents, null, 4), { encoding: 'utf8' });
        console.log( "File appended successfully." );
    }
    catch(error){
        console.error(error);
    }
}

module.exports = { readFromFile, writeToFile, appendToFile };