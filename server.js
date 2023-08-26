const express = require('express');
const path = require('path');
const env = require('dotenv');

//Initiate express
const app = express();

//Specify port
const PORT = process.env.PORT || 5000;

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

//Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));