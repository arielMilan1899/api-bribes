//index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//Import custom sources
const bribesRoutes = require("./src/bribes/routes");
const errorHandler = require('./src/helpers/errorHandler');

const app = express();
const port = 5000;

// Welcome message
app.get('/', (req, res) => res.send('Welcome'));

//Use cors
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Use API routes in the App
app.use('/bribes', bribesRoutes);

//Use error handler
app.use((err, req, res, next) => {
    errorHandler(err, res);
});

// Launch app to the specified port
module.exports = app.listen(port, function () {
    console.log("Running on Port " + port);
});
