//update funktioner...

function updateFirstname(){

  let updatedFirstname={
    username:document.getElementById("pUsername").value,
    firstname:document.getElementById("nFirstname").value,
    lastname:document.getElementById("pLastname").value,
    age:document.getElementById("pAge").value,
    interests:document.getElementById("pIntersts").value,
    gender:document.getElementById("pGender").value
  }
  if (updatedFirstname.firstname!=localStorage.getItem("eksamen2020UserList").firstname){
    localStorage.setItem("eksamen2020UserList", JSON.stringify(updatedFirstname))
  }else {
    alert("Firstname has been updated")
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("uFirstnameBtn").addEventListener("click",updateFirstname);
})
  fetch('http://localhost:3001/update/firstname', {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedFirstname), //lader mig tilgå værdierne af updatedUser i min controller når jeg skriver req.body
  }).then(res => res.json())
    .then(data => 
      {
    alert('Firstname has been updated', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }

  function updateLastname(){

    let updatedLastname={
      username:document.getElementById("pUsername").value,
      firstname:document.getElementById("pFirstname").value,
      lastname:document.getElementById("nLastname").value,
      age:document.getElementById("pAge").value,
      interests:document.getElementById("pIntersts").value,
      gender:document.getElementById("pGender").value
    }
    if (updatedLastname.lastname!=localStorage.getItem("eksamen2020UserList").lastname){
      localStorage.setItem("eksamen2020UserList", JSON.stringify(updatedLastname))
    }else {
      alert("Lastname has been updated")
    }
  
    document.addEventListener("DOMContentLoaded", ()=>{
      document.getElementById("uLastnameBtn").addEventListener("click",updateLastname);
  })
    fetch('http://localhost:3001/update/lastname', {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedLastname), 
    }).then(res => res.json())
      .then(data => 
        {
      alert('Lastname has been updated', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    }

    function updateAge(){

      let updatedAge={
        username:document.getElementById("pUsername").value,
        firstname:document.getElementById("pFirstname").value,
        lastname:document.getElementById("pLastname").value,
        age:document.getElementById("nAge").value,
        interests:document.getElementById("pIntersts").value,
        gender:document.getElementById("pGender").value
      }
      if (updatedAge.age!=localStorage.getItem("eksamen2020UserList").age){
        localStorage.setItem("eksamen2020UserList", JSON.stringify(updatedAge))
      }else {
        alert("Age has been updated")
      }
      document.addEventListener("DOMContentLoaded", ()=>{
        document.getElementById("uAgeBtn").addEventListener("click",updateAge);
    })
      fetch('http://localhost:3001/update/age', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAge), 
      }).then(res => res.json())
        .then(data => 
          {
        alert('Age has been updated', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      }

      function updateInterests(){

        let updatedInterests={
          username:document.getElementById("pUsername").value,
          firstname:document.getElementById("pFirstname").value,
          lastname:document.getElementById("pLastname").value,
          age:document.getElementById("pAge").value,
          interests:document.getElementById("nIntersts").value,
          gender:document.getElementById("pGender").value,
        }
        if (updatedInterests.interests!=localStorage.getItem("eksamen2020UserList").interests){
          localStorage.setItem("eksamen2020UserList", JSON.stringify(updatedInterests))
        }else {
          alert("Interests have been updated")
        }

        document.addEventListener("DOMContentLoaded", ()=>{
          document.getElementById("uInterestsBtn").addEventListener("click",updateInterests);
      })
        fetch('http://localhost:3001/update/interests', {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedInterests), 
        }).then(res => res.json())
          .then(data => 
            {
          alert('Interests have been updated', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        }

        function updateGender(){

          let updatedGender={
            username:document.getElementById("pUsername").value,
            firstname:document.getElementById("pFirstname").value,
            lastname:document.getElementById("pLastname").value,
            age:document.getElementById("pAge").value,
            interests:document.getElementById("pIntersts").value,
            gender:document.getElementById("nGender").value,
          }
          if (updatedGender.gender!=localStorage.getItem("eksamen2020UserList").gender){
            localStorage.setItem("eksamen2020UserList", JSON.stringify(updatedGender))
          }else {
            alert("Gender has been updated")
          }
          document.addEventListener("DOMContentLoaded", ()=>{
            document.getElementById("uGenderBtn").addEventListener("click",updateGender);
        })
          fetch('http://localhost:3001/update/gender', {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedGender), 
          }).then(res => res.json())
            .then(data => 
              {
            alert('Gender has been updated', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          }

//logout funktion -redirect til login siden - her kunne man bruge localstorage 
function logout(){ 

  document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("logout").addEventListener("click",logout);
})
fetch('http://localhost:3001/logout/:username', {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
    .then(data => 
      {
    alert('User has been logged out', data);
    window.location="login.html"
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

function deleteUser(){ 
  let user={
    username:document.getElementById("pUsername").value,
  }
  if (user.username==localStorage.getItem("eksamen2020UserList").username){
    localStorage.removeItem("eksamen2020UserList", JSON.stringify(user))
  }else {
    alert("User has been deleted")
  }


  document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("delete").addEventListener("click",deleteUser);
})
fetch('http://localhost:3001/delete/:username', {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user), 
  }).then(res => res.json())
  .then(data => 
      {
    alert('User has been deleted', data);
    window.location="login.html"
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}




//matchfunktioner

//Her bruger jeg faktiks Fetch, som det er ment: dataene indsættes i html via Fetch, ikke igennem min user.js fil
function about(){
  let matchData={ //henter interesser fra den bruger som er logget ind så jeg kan sammeligne dem med brugerne i DB for at se om de har en fælles interesse -ellers vises bare random
    interests:document.getElementById("pIntersts").value,
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("about").addEventListener("click", about);  
})
fetch('http://localhost:3001/match/about', {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(matchData), 
          }).then(res=> res.json())
          .then(data => 
            {
          // finder matchList
          var matchList=  document.getElementById("matchList") //Det er ved at bruge at Fetch sådan her, at den kan benyttes til at sætte data ind i frontend... ikke ved at gøre det i API'et
          var matchName= Object.values(data)
          matchList.innerHTML=matchName

          alert('You have a new match', data);

          })
          .catch((error) => {
            console.error('Error:', error);
          });
}

function like(){
  let matchData={
    username:document.getElementById("pUsername").value,
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("like").addEventListener("click",like);
})
fetch('http://localhost:3001/match/like', {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(matchData), 
          }).then(res => res.json()).then(data => 
              {
            alert('Match profile is shown', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
}

function dislike(){
  let matchData={
    username:document.getElementById("pUsername").value,
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("dislike").addEventListener("click",dislike);
})
fetch('http://localhost:3001/match/dislike', {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(matchData), 

          }).then(res => res.json())
          .then(data => 
              {
            alert('Match profile is shown', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
}

function deleteMatch(){
  let matchData={
    username:document.getElementById("pUsername").value,
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("deleteMatch").addEventListener("click", about);  
})
fetch('http://localhost:3001/match/delete', {
            method: 'DELETE', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(matchData), 
          }).then(res => res.json())
            .then(data => 
              {
            alert('Match has been deleted', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
}
