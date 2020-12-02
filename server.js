// import required essentials
const http = require('http');
const express = require('express');
var cors = require('cors');
// import `items` from `routes` folder 
const itemsRouter = require('./controller/userController');

// create new app
const app = express();
app.use(express.json());
// use it before all route definitions
// allowing below URL to access these APIs end-points
// you can replace this URL(http://localhost:8100) with your
// application URL from where you are calling these APIs
app.use(cors({origin: 'http://localhost:8100'}));

/* this '/items' URL will have two end-points:
→ localhost:3000/items/ (this returns array of objects)
→ localhost:3000/items/:id (this returns single object)
*/
app.use('/items', itemsRouter);

// default URL to API
app.use('/', function(req, res) {
    res.send('node-ex-api works :-)');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);





























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

