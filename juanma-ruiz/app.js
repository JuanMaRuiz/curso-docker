const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product'); // Imports routes for the products
const app = express();


// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://root:example@localhost:27017';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection

const port = 3001;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
