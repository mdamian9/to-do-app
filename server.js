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

// Initialize API routes
const tasksRoutes = require('./api/routes/tasks');

// Use API routes
app.use('/tasks', tasksRoutes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// Send every request to the React app
// Define any API routes before this runs
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Run server
app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
