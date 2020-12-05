{
    "username": "claratruelsen",
    "password": "hejhej123",
    "firstname":"Clara",
    "lastname":"Truelsen",
    "age":"21",
    "interests":"coding",
    "gender":"female",
    "matches":""
},














//fetch.... 

function createUser(user){
    
    //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
fetch('http://localhost:3000/', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
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
  
  
    fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logInData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Logget ind:', data);
        localStorage.setItem("loggedIn", JSON.stringify(data))  // Create a local storage, with the key "loggedIN" and data (email + password)
        window.location="home.html" // Sends the user to home.HTML 
        
      })
      .catch((error) => {
        console.error(error);
      });
    }