
function createUser() {
    let newUser={
        username:document.getElementById("newUsername").value,
        password: document.getElementById("newPassword").value,
        firstname:document.getElementById("firstname").value,
        lastname:document.getElementById("lastname").value,
        age:document.getElementById("age").value,
        interests:document.getElementById("interests").value,
        gender:document.getElementById("gender").value,
        matches:[]
    }

        document.addEventListener("DOMContentLoaded", ()=>{
        document.getElementById("createbtn").addEventListener("click",createUser);
})
  
fetch('http://localhost:3000/create', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
}).then(response => response.json()).then(data => 
    {
  alert('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

 
function log_in(){
  
    var emailValue = document.getElementById("emailLogIn").value;
    var passwordValue = document.getElementById("passwordLogIn").value;
  
    let logInData = {
      email: emailValue,
      password: passwordValue
    };
  
  
    fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logInData),
      })
      .then(response => response.json())
      .then(data => {
        //console.log('Logget ind:', data);
        //localStorage.setItem("loggedIn", JSON.stringify(data))  // Create a local storage, with the key "loggedIN" and data (email + password)
        //window.location="home.html" // Sends the user to home.HTML 
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
    }

