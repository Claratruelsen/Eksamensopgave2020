//henter express
const express = require('express');
const app = express();
//henter cors - cors sørger for at andre servere kan tilgå dataen... https://www.youtube.com/watch?v=zoSJ3bNGPp0
const cors = require('cors')
app.use(cors())
app.use(cors());

//middleware : fs, body-parser - lader os tilgå JSON data https://www.youtube.com/watch?v=zoSJ3bNGPp0
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const fs = require('fs');
//middleware som lader mig tilgå mine statiske filer 
app.use(express.static("view"));
  

//route til loginsiden - roden 
app.get("/", (req, res) => {
res.sendFile(__dirname + "/view/login.html");
})

app.get("/users", (req,res)=>{
  let users = JSON.parse(fs.readFileSync("./model/data.json"))
  res.status(200).json(users)
})

//login
app.get("/user/:username", sendUser);
function sendUser(req,res){
    var data=req.params;
    res.send(data.user);
}

app.post("/create"), (req, res)=>{
  res
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
/*
const user = require("./controller/userController.js");
app.use("/user", user)
*/














