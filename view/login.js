function createUser() {
    var newUser=[
        username= document.getElementById("newUsername").value,
        password= document.getElementById("newPassword").value,
        firstname=document.getElementById("firstname").value,
        lastname=document.getElementById("lastname").value,
        age=document.getElementById("age").value,
        interests=document.getElementById("interests").value,
        gender=document.getElementById("gender").value,
        matches=[]
    ]
    //checker om brugernavnet esksisterer i localstorage - hvis ikke registeres brugeren derinde
        if (newUser.username!=localStorage.getItem("eksamen2020UserList").username){
          localStorage.setItem("eksamen2020UserList", JSON.stringify(newUser))
        }else {
          alert("You already have an account - please log in instead")
        }

fetch("http://localhost:3001/create", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
})
.catch((error) => {
  console.error(error);
});
}
document.addEventListener("DOMContentLoaded", ()=>{
document.getElementById("createbtn").addEventListener("click",createUser)});


function login(){
  
    var loginInfo = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    };

    fetch('http://localhost:3001/login/:username', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      })
      .then(res => res.json())
      .then(data => {
        
        console.log('it worked:', data);
        window.location="profile.html" //sender over til profil siden
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
    }

document.addEventListener("DOMContentLoaded", ()=>{
document.getElementById("loginbtn").addEventListener("click",login)})




