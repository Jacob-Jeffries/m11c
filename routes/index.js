const express = require('express');
const app = express();

const notesRotuer = require('./notes');

app.use('/notes', notesRotuer);

module.exports = app;