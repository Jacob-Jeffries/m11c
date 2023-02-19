// Global Constants
const express = require('express');
const path = require('path');
const app = express();

const EXPRESS_PORT = process.env.PORT || 3012;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static delivery of the public folder HTML
app.use(express.static('./public/'));

// GET route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
):


// Webserver listening on EXPRESS_PORT
app.listen(EXPRESS_PORT, () =>
console.log(`App listening at http://localhost:${EXPRESS_PORT}`)
);
