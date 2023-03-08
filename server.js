// Global Constants
const express = require('express');
const app = express();
const { join } = require('path');
const path = require('path');

const EXPRESS_PORT = process.env.PORT || 3012;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import the API routes
const api = require('./routes/index');
app.use('/api', api);

// Static delivery of the public folder HTML
app.use(express.static('./public/'));

// GET route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req,res) => {
  console.log('Notes Page Loaded');
  res.sendFile(path.join(__dirname, '/public/notes.html'))
}
);

//Wildcard route to direct users to a 404 page
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// Webserver listening on EXPRESS_PORT
app.listen(EXPRESS_PORT, () =>
console.log(`App listening at http://localhost:${EXPRESS_PORT}`)
);