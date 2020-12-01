//henter express
const express = require('express');
const app = express()

//henter cors
const cors = require('cors')
app.use(cors())

//bruger inbygget fs funktion - denne hjælper med at endpoints kan læse og redigere i JSON data
const fs = require('fs');


const userController = require("./controller/userController");


// Crud-endpoints
app.use('/user', userController); // endpoint


app.listen(3000)
console.log("Server running on port 3000")

