const express = require('express');
const notes = express.Router();
const { readFromFile, writeToFile } = require('../../helpers/fsUtils');

/**
 * Gets all notes.
 */
notes.get('/', (request, response) => {
    try{
        let data = readFromFile('./db/db.json');
        response.json(JSON.parse(data));
    }
    catch(error){
        response.status(500).json({ msg: 'Failed to load notes.' });
    }
});

/**
 * Adds a note.
 */
notes.post('/', (request, response) => {
    try{
        const { title, text } = request.body;
        if(title && text){
            let data = readFromFile('./db/db.json');
            data = JSON.parse(data);
            const newNote = {
                title,
                text,
                id: data.length + 1
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
        response.status(500).json({ msg: 'Failed to add a note.' });
    }
});

/**
 * Deletes a note based on ID.
 */
notes.delete('/:id', (request, response) => {
    try{
        let data = readFromFile('./db/db.json');
        let id = parseInt(request.params.id);
        data = JSON.parse(data);
        if(data.length >= id){
            data.splice(id - 1, 1);
        }
        data.forEach((note, index) => {
            note.id = index + 1;
        });
        writeToFile('./db/db.json', data);
        response.json(data);
    }
    catch(error){
        response.status(500).json({ msg: 'Failed to delete a note.' });
    }
});

module.exports = notes;