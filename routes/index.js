const express = require('express');
const notesRouter = require('./api/notes');

const app = express();
//Define a route to /notes
app.use('/notes', notesRouter);

module.exports = app;