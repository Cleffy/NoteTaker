const express = require('express');
const notes = express.Router();
const { readFromFile, writeToFile } = require('../../helpers/fsUtils');

// Get all notes
notes.get('/', (request, response) => {
    try{
        let data = readFromFile('./db/db.json');
        response.json(JSON.parse(data));
    }
    catch(error){
        response.status(500).json({ msg: 'Failed to load notes.' });
    }
});

// Add a note
notes.post('/', (request, response) => {
    try{
        const { title, text } = request.body;
        if(title && text){
            let data = readFromFile('./db/db.json');
            data = JSON.parse(data);
            const newNote = {
                title,
                text,
                id: data.length
            };
            data.push(newNote);
            writeToFile('./db/db.json', data);
            response.json(newNote);
        }
        else{
            response.json({ msg: 'Error creating note.' });
        }
    }
    catch(error){
        response.status(500).json({ msg: 'Failed to append notes.' });
    }
});

module.exports = notes;