// import required essentials
const express = require('express');
// create new router
const router = express.Router();

//læser data fra json filen og parser den således at den bliver til et js objekt jeg kan bruge:

const fs = require('fs')
 let users= fs.readFile('./data.json', (err, jsonString) => {
     if (err) {
         console.log("Error reading file from disk:", err)
         return
     }
     try {
         const users = JSON.parse(jsonString)
         console.log(users)
 } catch(err) {
         console.log('Error parsing JSON string:', err)
     }
 })
console.log(users);

module.exports=users

// login funktion:

$("#login").submit(function(event){
    event.preventDefault();
var username= $("#username").val();
var password= $("#password").val();

if (!username== users.username && !password==users.password){
    $("#loginfail").html("oops, wrong username or password")
}else{
    redirect
}
})


/*

.find

req.body.email.find



der skal laves to funktioner: 

login funktion, som checker om brugernavn og password stemmer overens og dernæst videresender dem til profilsiden... 


createuser funktion 

den her fil skal snakke med modelUSer og hente dataen fra innerhtml.value
sætte det ind i usermodel og gør det til et JS opbejk som så kan konverteres til et JSON objekt igennem JSON.stringify

med id: loop igennem de id'er der er i JSON filen og få den til at inkrementere det med en når en ny bruger logger ind!


login: 

<form id="login">
 id="username" 
id="password" 

            <input type="button" id= "submitLogin" onclick="loginEvent()" value="Login">
            <!--submit knappen skal checke om oplysningerne er korrekt og hvis de er skal den lede over i homepage-->


function login{

    
    //læs data fra JSON fil og konverter til js objekt 
    //check om username og password stemmer overens - loop igennem klassen og se om username.value/ password.value fra html er den samme som JSON
    // hvis de er de samme skal den hente route for useren så den sendes til 
}




Create a JavaScript object with the table array in it

var obj = {
   table: []
};
Add some data to it, for example:

obj.table.push({id: 1, square:2});
Convert it from an object to a string with JSON.stringify

var json = JSON.stringify(obj);
Use fs to write the file to disk

var fs = require('fs');
fs.writeFile('myjsonfile.json', json, 'utf8', callback);





// https://stackoverflow.com/questions/36856232/write-add-data-in-json-file-using-node-js

// HTTP methods ↓↓ starts here.

// READ
// this api end-point of an API returns JSON data array
router.get('/', function (req, res) {
    res.status(200).json(user);
});

// READ
// this api end-point returns an object from a data array find by id
// we get `id` from URL end-points
router.get('/:id', function (req, res) {
    // find an object from `data` array match by `id`
    let found = user.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});
/*
// CREATE
// this api end-point add new object to item list
// that is add new object to `data` array
router.post('/', function (req, res) {
    // get itemIds from data array
    let itemIds = data.map(item => item.id);
    // get orderNums from data array
    let orderNums = data.map(item => item.order);

    // create new id (basically +1 of last item object)
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    // create new order number (basically +1 of last item object)
    let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

    // create an object of new Item
    let newItem = {
        id: newId, // generated in above step
        title: req.body.title, // value of `title` get from POST req
        order: newOrderNum, // generated in above step
        completed: false, // default value is set to false
        createdOn: new Date() // new date object
    };

    // push new item object to data array of items
    data.push(newItem);

    // return with status 201
    // 201 means Created. The request has been fulfilled and 
    // has resulted in one or more new resources being created. 
    res.status(201).json(newItem);
});

// UPDATE
// this api end-point update an existing item object
// for that we get `id` and `title` from api end-point of item to update
router.put('/:id', function (req, res) {
    // get item object match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    // check if item found
    if (found) {
        let updated = {
            id: found.id,
            title: req.body.title, // set value of `title` get from req
            order: req.body.order, // set value of `order` get from req
            completed: req.body.completed // set value of `completed` get from req
        };

        // find index of found object from array of data
        let targetIndex = data.indexOf(found);

        // replace object from data list with `updated` object
        data.splice(targetIndex, 1, updated);

        // return with status 204
        // success status response code 204 indicates
        // that the request has succeeded
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

// DELETE
// this api end-point delete an existing item object from
// array of data, match by `id` find item and then delete
router.delete('/:id', function (req, res) {
    // find item from array of data
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        // if item found then find index at which the item is
        // stored in the `data` array
        let targetIndex = data.indexOf(found);

        // splice means delete item from `data` array using index
        data.splice(targetIndex, 1);
    }

    // return with status 204
    // success status response code 204 indicates
    // that the request has succeeded
    res.sendStatus(204);
});

// module.exports is an object included in every JS file of Node.js
// application, whatever we assign to module.exports will be exposed as a module. 

module.exports = router;

*/


















/*

// skal hente data fra id'erne der udfyldes i frontend / HTML 
//og eksportere disse til serveren som ændrer / henter værdierne fra JSON


//fra godkend 3: 
const users = require("./hardUser"); // her skal jeg require indtastet data fra html

function userController(req, res) {
    res.end(JSON.stringify(users))
};

module.exports=userController;




var newUsername= document.getElementById("newUsername").value
var username=data.innerHTML.Newusername


var password=data.document.getElementById("newPassword").value



// register functionality
function registerUserEvent() {
	// store new users username
	var registerUsername = document.getElementById('newUsername').value
	// store new users password
	var registerPassword = document.getElementById('newPassword').value
	// store new user data in an object
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}
	// loop through people array to see if the username is taken, or password too short
	for(var i = 0; i < userList.length; i++) {
		// check if new username is equal to any already created usernames
		if(registerEmail == userList[i].email) {
			// alert user that the email is in use
			alert('That email is already in use, please type in another one')
			// stop the statement if result is found true
			break
		// check if new password is 8 characters or more
		} else if (registerPassword.length < 8) {
			// alert user that the password is to short
			alert('That password is too short, please include 8 or more characters')
			// stop the statement if result is found true
			break
		}
	}
	// push new object to the people array
	userList.push(newUser)
	// console the updated people array
	console.log(userList)
}


/*
const users = require("./hardUser");
const express = require("express");
const router = express.Router();


router.get ("/", function (req, res) {
    res.end(JSON.stringify(users))
});


module.exports=users;



*/

