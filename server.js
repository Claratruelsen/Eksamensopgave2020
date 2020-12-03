
const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors())


    
app.get("/", (req, res) => {
res.render("./view/login.html")
    
})


const users = require("./controller/userController.js");
app.use("/users", users)



app.listen(3000)


















/*

//henter express
const express = require('express');
const app = express();

//henter cors
const cors = require('cors')
app.use(cors())

//bruger inbygget fs funktion - denne hjælper med at endpoints kan læse og redigere i JSON data
const fs = require('fs');
const data=fs.readFileSync("data.json");
const users=JSON.parse(data);



//login
app.get("/user/:username", sendUser);
function sendUser(req,res){
    var data=req.params;
    res.send(data.user);
}

//create 
app.get("/create/:username", sendUser);
function addUser(req,res){
    var data=req.params;
    var username=data.username
    var newUsername=data.newUsername

    users[username]=newUsername;
    var data=JSON.stringify(users, null, 2);
    fs.writeFile("data.json", users)
}


//localhost:3000
const server=app.listen(3000, listening) // call back function så jeg ved at porten virker/lytter
function listening(){
    console.log("Listening on port...")
}

//tilgår brugen af html som frontend for min server 
app.use(express.static("view"));



/*
const userController = require("./controller/userController");


// Crud-endpoints
app.use('/user', userController); // endpoint

*/

