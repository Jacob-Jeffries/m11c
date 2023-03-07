const notes = require('express').Router();

// All of these routes will be under the /api/* parent directory
notes.get('/notes', (req, res) => {
  console.log("test");
  res.send("TEST");
});

notes.post('/notes', (req, res) => {
});

module.exports = notes;
