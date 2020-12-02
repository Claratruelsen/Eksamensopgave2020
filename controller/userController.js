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

