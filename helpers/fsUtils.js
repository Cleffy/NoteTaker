const fs = require('fs');

/**
 * readFromFile
 * @param {*} file 
 * @returns unparsed text
 * 
 * Takes in a file destination. Then returns the context in text format.
 */
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

/**
 * writeToFile
 * @param {*} file 
 * @param {*} content 
 * 
 * Takes in a file destination, and content. Then replaces anything in the file with the content.
 */
function writeToFile(file, content){
    try{
        fs.writeFileSync(file, JSON.stringify(content, null, 4));
        console.log( "File written successfully." );
    }
    catch(error){
        console.error(error);
    }
}

/**
 * appendToFile
 * @param {*} file 
 * @param {*} content 
 * 
 * Takes in a file destination, and content. Assuming the file is JSON, it appends the content to the end of the JSON file.
 */
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