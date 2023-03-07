const notes = require('express').Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

// All of these routes will be under the /api/notes parent directory
notes.get('/', (req, res) => {
  console.log("GET Test");
  res.send("GET Test");
});

notes.post('/', (req, res) => {
  console.log('POST Test');
  res.send('POST Test');
});

module.exports = notes;
