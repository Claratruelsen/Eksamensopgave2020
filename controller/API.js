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

//function som gemmer brugerinformation i LS
submitNewUser.onclick=function(){
const firstName=firstName.value;
const lastName=lastName.value;
const DOB=DOB.value;
const interests=interests.value;
const gender=gender.value;



};


//localstorage

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
  }