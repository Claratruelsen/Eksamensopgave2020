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
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
}).then(response => response.json()).then(data => 
    {
  alert('User has been added', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

function login(){
  
    let logininfo = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    };

  document.addEventListener("DOMContentLoaded", ()=>{
      document.getElementById("loginbtn").addEventListener("click",login);
  })

  
    fetch('http://localhost:3000/login/:username', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
      })
      .then(response => response.json())
      .then(data => {
        console.log('it worked:', data);
        localStorage.setItem("loggedIn", JSON.stringify(data))
        window.location="profile.html" //denne gør at når login kaldes så bliver vi redirectet over til profil siden 
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
    }



