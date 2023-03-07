const notes = require('express').Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

// All of these routes will be under the /api/* parent directory
notes.get('/notes', (req, res) => {
  console.log("GET Test");
  res.send("GET Test");
});

notes.post('/notes', (req, res) => {
  console.log('POST Test');
  res.send('POST Test');
});

module.exports = notes;
