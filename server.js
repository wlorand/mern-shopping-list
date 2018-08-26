/**
 * File: server.js
 * Desc: simple express server, with mongodb connections, maybe hard-coded routes
 */

 // 0- bring in the libs your module needs to do its work
 const express = require('express');
 const mongoose = require('mongoose');
 const bodyParser = require('body-parser');

 // 1- init express as a var called app
 const app = express();

 // 2- add some bodyParser middleware (recall these as app.use()
 app.use(bodyParser.json());

 // 3- Add DB Config
 const db = require('./config/keys').mongoURI;
 //console.log(db);

 // 4- Connect to MongoDB (using mongoose)
 mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// 5- Run the server on a Port (set to an env var)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));


