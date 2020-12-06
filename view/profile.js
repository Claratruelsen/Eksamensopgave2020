//logout funktion - sørger for at clear localstorage så vedkommende ikke længere står som værende logget ind - dernæst redirect til login siden
function logout(){ 

  document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("logout").addEventListener("click",logout);
})

window.localStorage.clear(); //..... skal jeg gøre dette hmhhh
window.location="login.html";
};

function updateFirstname(){

}
