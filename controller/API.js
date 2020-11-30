
/*

//Henter alle mine Id'er fra html..
const email=document.getElementById("email"), //med kommaet slipper jeg for at skrive const ved hver enkelt
password=document.getElementById("password"),
firstName=document.getElementById("firstName"),
lastName=document.getElementById("lastName"),
DOB=document.getElementById("DOB"),
interests=document.getElementById("interests"),
gender=document.getElementById("gender"),
sexualPrefference=document.getElementById("sexualPrefference"),
newEmail=document.getElementById("newEmail"),
newPassword=document.getElementById("newPassword"),
submitNewUser=document.getElementById("submitNewUser"),
submitLogin=document.getElementById("submitLogin")

*/


// login functionality - link: https://www.youtube.com/watch?v=ZS_FG60sDG8

function loginEvent() {
	// retreive data from username and store in username variable
	var email = document.getElementById('email').value
	// retreive data from password and store in password variable
	var password = document.getElementById('password').value

	// loop through all the user objects and confrim if the username and password are correct
	for(var i = 0; i < userList.length; i++) {
		// check to 
		if(email == userList[i].email && password == userList[i].password) {
			console.log(email + ' is logged in!!!')
			// stop the statement if result is found true 
			break
		} else {
			// error if email and password don't match
			console.log('incorrect username or password')
		}
	}
}

// register functionality
function registerUserEvent() {
	// store new users username
	var registerEmail = document.getElementById('newEmail').value
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


//localstorage - link: https://www.youtube.com/watch?v=k8yJCeuP6I8


//function som gemmer brugerinformation i LS
submitNewUser.onclick=function(){
  const firstName=firstName.value;
  const lastName=lastName.value;
  const DOB=DOB.value;
  const interests=interests.value;
  const gender=gender.value;
  }

//hent brugernavn fra local storage (hvis det er udfyldt...)
function getEmail(){
    if(localStorage.getItem("email")===null){
        getUsername.textContent="[Enter email]";
    }else{
        getUsername.textContent=localStorage.getItem("email");
    }
}

function setEmail(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('email', e.target.innerText);
        email.blur();
      }
    } else {
      localStorage.setItem('email', e.target.innerText);
    }
  };
