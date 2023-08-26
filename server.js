const express = require('express');
const path = require('path');
const env = require('dotenv');

// Initiate express
const app = express();

// Specify port
const PORT = process.env.PORT || 5000;

// Middlewares
// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Notes API Routes
app.use('/api/notes', require('./routes/api/notes'));

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));