/**
 * File: server.js
 * Desc: simple express server, with mongodb connections, maybe hard-coded routes
 */

// 0- require libs
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // to process form field data

// 00- require the item routes file
const items = require('./routes/api/items');

// 1- init express as a var called app
const app = express();

// 2- add some bodyParser middleware (recall these as app.use()
app.use(bodyParser.json());

// 3- Add DB Config Var (not to be under version control if you'll recall)
const db = require('./config/keys').mongoURI;
//console.log(db);

// 4- Connect to MongoDB (using mongoose)
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB hosted by mlab Connected...'))
  .catch(err => console.log(err));

// 5- Actually Use the Routes File (recall middleware tells express what to do)
app.use('/api/items', items);

// 6- Run the server on a Port (set to an env var)
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port: ${port}`));
