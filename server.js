/**
 * File: server.js
 * Desc: simple express server, with mongodb connections, maybe hard-coded routes
 */

// libs
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // to process form field data

// core node modules
const path = require('path');

// api / item routes file
const items = require('./routes/api/items');

// 1- init express as a var called app -- memorize this one
const app = express();

// 2- add some bodyParser middleware (recall these as app.use() - know this express method for setup
app.use(bodyParser.json());

// 3- Add DB Config Var (not to be under version control if you'll recall)
const db = require('./config/keys').mongoURI;
//console.log(db);

// 4- Connect to MongoDB (using mongoose)
mongoose
  .connect(
    db,
    { useNewUrlParser: true } // some mongodb version thing
  )
  .then(() => console.log('MongoDB hosted by mlab Connected...'))
  .catch(err => console.log(err));

// 5- Tell your App to Use the Routes File (recall middleware tells express what to do)
app.use('/api/items', items);

// 6- Serve static assets from the build file if in PRODUCTION
if (process.env.NODE_ENV === 'production') {
  // set Static assets Folder in Express
  app.use(express.static('client/build'));
  // unless i hit an api route, have express return the build/index.html file
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// 7- Run the server on a Port (set to a node env var for production)
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port: ${port}`)); // never pass up a chance to use es6 template literals!
