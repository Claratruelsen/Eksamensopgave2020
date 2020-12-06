//logout funktion - sørger for at clear localstorage så vedkommende ikke længere står som værende logget ind - dernæst redirect til login siden
function logout(){ 

  document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("logout").addEventListener("click",logout);
})

window.localStorage.clear(); //..... skal jeg gøre dette hmhhh
window.location="login.html";
};

function deleteUser(){ //ikke helt sikker på jeg skal sætte det sådan her op
  let user={
    firstname:document.getElementById("pfirstname").value,
    lastname:document.getElementById("pLastname").value,
    age:document.getElementById("pAge").value,
    interests:document.getElementById("pInterests").value,
    gender:document.getElementById("pGender").value,
}

  document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("delete").addEventListener("click",deleteUser);
})
fetch('http://localhost:3000/delete', {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user), 
  }).then(response => response.json()).then(data => 
      {
    alert('User has been added', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function updateUser(){

  let updatedUser={
    firstname:document.getElementById("nFirstname").value,
    lastname:document.getElementById("nLastname").value,
    age:document.getElementById("nAge").value,
    interests:document.getElementById("nIntersts").value,
    gender:document.getElementById("nGender").value,
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("update").addEventListener("click",updateUser);
})
  fetch('http://localhost:3000/update', {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser), //lader mig tilgå værdierne af updatedUser i min controller når jeg skriver req.body
  }).then(response => response.json()).then(data => 
      {
    alert('User has been added', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }
