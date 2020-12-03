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


//henter indbygget express middleware som lader mig tilgå mine html og CSS filer - (alle statiske filer  )   
app.use(express.static("view"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/login.html");
})



/*
const users = require("./controller/userController.js");
app.use("/users", users)
*/


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


app.listen(3000)









