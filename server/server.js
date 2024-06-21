const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse POST request data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the personal-website folder
app.use(express.static(path.join(__dirname, '../')));

// Handle form submission
app.post('/submit_form', (req, res) => {
  console.log('Form data received:', req.body);
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
