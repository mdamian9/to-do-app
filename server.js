const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
require('dotenv').config();

// Log requests to the console
app.use(morgan('dev'));
// Use express body parser to parse request bodies and set json to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
