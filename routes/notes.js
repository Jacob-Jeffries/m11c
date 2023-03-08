const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
  checkFile,
} = require('../helpers/fsUtils');

// All of these routes will be under the /api/notes parent directory
notes.get('/', (req, res) => {
  // console.log("GET Test");
  // res.send("GET Test");

  readFromFile('./db/db.json')
  // This reads the file into a string, we must parse it as JSON
  .then((data) => JSON.parse(data))
  .then((json) => {
    res.json(json)
  })
});

notes.post('/', (req, res) => {
  // console.log('POST Test');
  // res.send('POST Test');
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      id: uuidv4(),
      title,
      text,
    }

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding Note');
  }
});

notes.delete('/:id', (req, res) => {
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const filtered = json.filter((el) => el.id != req.params.id);
      console.log(filtered);
      writeToFile('./db/db.json', filtered);
    });
  }
);

module.exports = notes;
