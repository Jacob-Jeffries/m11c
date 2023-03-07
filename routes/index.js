const express = require('express');
const app = express();

// Import modular Routes
const notesRouter = require('./notes');

// Loading the /API/notes route
app.use('/notes', notesRouter);

module.exports = app;