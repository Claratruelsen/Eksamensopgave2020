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


//update funktioner...

function updateFirstname(){

  let updatedFirstname={
    username:document.getElementById("pUsername"),
    firstname:document.getElementById("nFirstname").value,
    lastname:document.getElementById("pLastname").value,
    age:document.getElementById("pAge").value,
    interests:document.getElementById("pIntersts").value,
    gender:document.getElementById("pGender").value,
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("uFirstnameBtn").addEventListener("click",updateFirstname);
})
  fetch('http://localhost:3000/update/firstname', {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedFirstname), //lader mig tilgå værdierne af updatedUser i min controller når jeg skriver req.body
  }).then(response => response.json()).then(data => 
      {
    alert('Firstname has been updated', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }

  function updateLastname(){

    let updatedLastname={
      username:document.getElementById("pUsername"),
      firstname:document.getElementById("pFirstname").value,
      lastname:document.getElementById("nLastname").value,
      age:document.getElementById("pAge").value,
      interests:document.getElementById("pIntersts").value,
      gender:document.getElementById("pGender").value,
    }
  
    document.addEventListener("DOMContentLoaded", ()=>{
      document.getElementById("uLastnameBtn").addEventListener("click",updateLastname);
  })
    fetch('http://localhost:3000/update/lastname', {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedLastname), 
    }).then(response => response.json()).then(data => 
        {
      alert('Lastname has been updated', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    }

    function updateAge(){

      let updatedAge={
        username:document.getElementById("pUsername"),
        firstname:document.getElementById("pFirstname").value,
        lastname:document.getElementById("pLastname").value,
        age:document.getElementById("nAge").value,
        interests:document.getElementById("pIntersts").value,
        gender:document.getElementById("pGender").value,
      }
    
      document.addEventListener("DOMContentLoaded", ()=>{
        document.getElementById("uAgeBtn").addEventListener("click",updateAge);
    })
      fetch('http://localhost:3000/update/age', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAge), 
      }).then(response => response.json()).then(data => 
          {
        alert('Age has been updated', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      }

      function updateInterests(){

        let updatedInterests={
          username:document.getElementById("pUsername"),
          firstname:document.getElementById("pFirstname").value,
          lastname:document.getElementById("pLastname").value,
          age:document.getElementById("pAge").value,
          interests:document.getElementById("nIntersts").value,
          gender:document.getElementById("pGender").value,
        }
      
        document.addEventListener("DOMContentLoaded", ()=>{
          document.getElementById("uInterestsBtn").addEventListener("click",updateInterests);
      })
        fetch('http://localhost:3000/update/interests', {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedInterests), 
        }).then(response => response.json()).then(data => 
            {
          alert('Interests have been updated', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        }

        function updateGender(){

          let updatedGender={
            username:document.getElementById("pUsername"),
            firstname:document.getElementById("pFirstname").value,
            lastname:document.getElementById("pLastname").value,
            age:document.getElementById("pAge").value,
            interests:document.getElementById("pIntersts").value,
            gender:document.getElementById("nGender").value,
          }
        
          document.addEventListener("DOMContentLoaded", ()=>{
            document.getElementById("uGenderBtn").addEventListener("click",updateGender);
        })
          fetch('http://localhost:3000/update/gender', {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedGender), 
          }).then(response => response.json()).then(data => 
              {
            alert('Gender has been updated', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          }