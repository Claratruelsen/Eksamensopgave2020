const express = require('express');
const app = express()

const cors = require('cors')
app.use(cors())

const fs = require('fs');

// Require for Routes
const userControllers = require("./controllers/userControllers.js");
const matchControllers = require("./controllers/matchControllers.js");
const userView = require("./view/userView");



// Vi starter serveren, på port 3000
app.listen(3000)
console.log("Server running on port 3000")


// Crud-endpoints
app.use('/User', userControllers); // endpoint
app.use('/Match', matchControllers); // endpoint
app.use('/User/register', userView); //endpoints
