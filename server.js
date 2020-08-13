// -------------------------- Node Modules ---------------------- //
// -------------------------- 3rd Party Modules ---------------------- //
// Web Server Framework (Makes building servers easier and faster)
const express = require('express');
const bodyParser = require('body-parser');

// -------------------------- Custom Modules Party Modules ---------------------- //

// -------------------------- Variables ---------------------- //
// Server App
const app = express();

// Server Port
const PORT = process.env.PORT || 3000;

// Database
const db = require('./models');


// -------------------------- MIDDLEWARE ---------------------- //
// Server Static Assets from Pubic Diretory
app.use(express.static(`${__dirname}/public`));

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// -------------------------- HTML ROUTES ---------------------- //
// THESE ROUTES SERVE OUR TEMPLATES


// GET Home (Root) Route
app.get('/', (req, res) => {
  res.sendFile('views/index.html', {
    root: __dirname,
  });
});


// GET Dashboard Route
app.get('/dashboard', (req, res) => {
    res.sendFile('views/dashboard.html', {
      root: __dirname,
    });
  });
  
  
  


// -------------------------- START SERVER ---------------------- //
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
