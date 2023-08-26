const express = require('express');
const path = require('path');
const env = require('dotenv');
const api = require('./routes/index.js');

// Specify port
const PORT = process.env.PORT || 5000;

// Initiate express
const app = express();


// Middlewares
// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Notes API Routes
app.use('/api', api);

// Set a static folder
app.use(express.static('public'));

// Home page
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/public/index.html'));
});
// Notes page
app.get('/notes', (request, response) => {
    response.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));