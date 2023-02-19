// Global Constants
const express = require('express');
const app = express();

const EXPRESS_PORT = process.env.PORT || 3012;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static delivery of the public folder HTML
app.use(express.static('public'));



// Webserver listening on EXPRESS_PORT
app.listen(EXPRESS_PORT, () =>
console.log(`App listening at http://localhost:${EXPRESS_PORT}`);
);
