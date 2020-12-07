upconst { match } = require("assert");
const express = require("express");
const fs = require("fs");
const router = express.Router();

//læser data fra json filen og parser den således at den bliver til et js objekt jeg kan bruge:
let existingUsers= fs.readFile('./data.json', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err)
        return
    }
    try {
        const existingUsers = JSON.parse(jsonString)
        console.log(existingUsers)
} catch(err) {
        console.log('Error parsing JSON string:', err)
    }
});

//create -> overskriver data.json filen med den nye bruger... 
router.post("/create", (req,res) => {

    let newUser=(
        req.body.username,
        req.body.password,
        req.body.firstName,
        req.body.lastname,
        req.body.age,
        req.body.interests,
        req.body.gender,
        []
    )
    fs.writeFile('./data.json', JSON.stringify(newUser, null, 2), (err) => {
        if (err) throw err;
        console.log('user has been added to database');
    });
    }) 
  

    //Log in - checker om oplysningerne er korrekt og hvis de er sendes brugeren over til sin profil
    router.post("/login/:username",  (req, res) => {    
	// looper igennem mit existing users array og ser om det indtastede username og password matcher 
	for(var i = 0; i < existingUsers.length; i++) {
		if(req.body.username == existingUsers[i].username && req.body.password == existingUsers[i].password) {
            res.json(existingUsers[i].username =document.getElementById("pUsername").innerHTML)// returnerer oplyningerne for brugeren og sætter dem ind i de forskellige div'er på profilen....
            res.json(existingUsers[i].firstname = document.getElementById("pFirstname").innerHTML)
            res.json(existingUsers[i].age = document.getElementById("pAge").innerHTML)
            res.json(existingUsers[i].interests = document.getElementById("pInterests").innerHTML)
            res.json(existingUsers[i].gender = document.getElementById("pGender").innerHTML)
            res.json(existingUsers[i].matches = document.getElementById("matchList").innerHTML)
		} else {
            res.json({err: "oops...incorrect username or password"}) // viser en error besked hvis oplysningerne ikke passer!
		}
    }})
    

//sletter bruger     
router.delete("/delete", (req, res)=>{

})


//opdaterer oplysninger - hvis req.body.firstname ikke er tomt så skal den nye værdi sættes ind som ny data i json
router.put("/update/firstname", (req, res)=>{
    let uFirstname=(
        req.body.username,
        req.body.firstname,
        req.body.lastname,
        req.body.age,
        req.body.interests,
        req.body.gender
    )

    if(req.body.firstname!==null){
        for(var i = 0; i < existingUsers.length; i++) {
            if(req.body.username == existingUsers[i].username){ 
                let existingUsers[i] = user=(
                    username= existingUsers[i].username,
                    password=existingUsers[i].password,
                    firstname= uFirstname.firstname,
                    lastname=existingUsers[i].lastname,
                    age=existingUsers[i].age,
                    interests=existingUsers[i].interests,
                    gender=existingUsers[i].gender,
                    matches=existingUsers[i].matches
                )}}   
                fs.writeFile('./data.json', JSON.stringify(user, null, 2), (err) => {
                if (err) throw err;
                console.log('Firstname has been updated');
            }); 
            res.json(user.username= document.getElementById("pUsername").innerHTML)
            res.json(user.firstname= document.getElementById("pFirstname").innerHTML) 
            res.json(user.lastname= document.getElementById("pLastname").innerHTML) 
            res.json(user.age= document.getElementById("pAge").innerHTML) 
            res.json(user.interests= document.getElementById("pInterests").innerHTML) 
            res.json(user.gender= document.getElementById("pGender").innerHTML) 
            res.json(user.matches = document.getElementById("matchList").innerHTML)
    }})

router.put("/update/lastname", (req, res)=>{
    let uLastname=(
        req.body.username,
        req.body.firstname,
        req.body.lastname,
        req.body.age,
        req.body.interests,
        req.body.gender
    )

    if(req.body.lastname!==null){
        for(var i = 0; i < existingUsers.length; i++) {
            if(req.body.username == existingUsers[i].username){ 
                let existingUsers[i] = user=(
                    username= existingUsers[i].username,
                    password=existingUsers[i].password,
                    firstname= existingUsers[i].firstname,
                    lastname=uLastname.lastname,
                    age=existingUsers[i].age,
                    interests=existingUsers[i].interests,
                    gender=existingUsers[i].gender,
                    matches=existingUsers[i].matches
                )}}   
                fs.writeFile('./data.json', JSON.stringify(user, null, 2), (err) => {
                if (err) throw err;
                console.log('Lastname has been updated');
            });  
            res.json(user.username= document.getElementById("pUsername").innerHTML)
            res.json(user.firstname= document.getElementById("pFirstname").innerHTML) 
            res.json(user.lastname= document.getElementById("pLastname").innerHTML) 
            res.json(user.age= document.getElementById("pAge").innerHTML) 
            res.json(user.interests= document.getElementById("pInterests").innerHTML) 
            res.json(user.gender= document.getElementById("pGender").innerHTML)  
            res.json(user.matches = document.getElementById("matchList").innerHTML)
    }})

router.put("/update/age", (req, res)=>{
    let uAge=(
        req.body.username,
        req.body.firstname,
        req.body.lastname,
        req.body.age,
        req.body.interests,
        req.body.gender
        )
    
    if(req.body.age!==null){
        for(var i = 0; i < existingUsers.length; i++) {
            if(req.body.username == existingUsers[i].username){ 
                let existingUsers[i] = user=(
                    username= existingUsers[i].username,
                    password=existingUsers[i].password,
                    firstname= existingUsers[i].firstname,
                    lastname=existingUsers[i].lastname,
                    age=uAge.age,
                    interests=existingUsers[i].interests,
                    gender=existingUsers[i].gender,
                    matches=existingUsers[i].matches
                )}}   
                fs.writeFile('./data.json', JSON.stringify(user, null, 2), (err) => {
                if (err) throw err;
                console.log('Age has been updated');
                });  
            res.json(user.username= document.getElementById("pUsername").innerHTML)
            res.json(user.firstname= document.getElementById("pFirstname").innerHTML) 
            res.json(user.lastname= document.getElementById("pLastname").innerHTML) 
            res.json(user.age= document.getElementById("pAge").innerHTML) 
            res.json(user.interests= document.getElementById("pInterests").innerHTML) 
            res.json(user.gender= document.getElementById("pGender").innerHTML) 
            res.json(user.matches = document.getElementById("matchList").innerHTML) 
        }})
    

router.put("/update/interests", (req, res)=>{
    let uInterests=(
        req.body.username,
        req.body.firstname,
        req.body.lastname,
        req.body.age,
        req.body.interests,
        req.body.gender
        )
            
    if(req.body.interests!==null){
        for(var i = 0; i < existingUsers.length; i++) {
            if(req.body.username == existingUsers[i].username){ 
                let existingUsers[i] = user=(
                    username= existingUsers[i].username,
                    password=existingUsers[i].password,
                    firstname= existingUsers[i].firstname,
                    lastname=existingUsers[i].lastname,
                    age=existingUsers[i].age,
                    interests=uInterests.interests,
                    gender=existingUsers[i].gender,
                    matches=existingUsers[i].matches
                )}}   
                fs.writeFile('./data.json', JSON.stringify(user, null, 2), (err) => {
                if (err) throw err;
                console.log('Interests have been updated');
                });  
            res.json(user.username= document.getElementById("pUsername").innerHTML)
            res.json(user.firstname= document.getElementById("pFirstname").innerHTML) 
            res.json(user.lastname= document.getElementById("pLastname").innerHTML) 
            res.json(user.age= document.getElementById("pAge").innerHTML) 
            res.json(user.interests= document.getElementById("pInterests").innerHTML) 
            res.json(user.gender= document.getElementById("pGender").innerHTML) 
            res.json(user.matches = document.getElementById("matchList").innerHTML) 
        }})
         
router.put("/update/gender", (req, res)=>{
    let uGender=(
        req.body.username,
        req.body.firstname,
        req.body.lastname,
        req.body.age,
        req.body.interests,
        req.body.gender
        )
                    
    if(req.body.gender!==null){
        for(var i = 0; i < existingUsers.length; i++) {
            if(req.body.username == existingUsers[i].username){ 
                let existingUsers[i] = user=(
                    username= existingUsers[i].username,
                    password=existingUsers[i].password,
                    firstname= existingUsers[i].firstname,
                    lastname=existingUsers[i].lastname,
                    age=existingUsers[i].age,
                    interests=existingUsers[i].interests,
                    gender=uGender.gender,
                    matches=existingUsers[i].matches
                )}}   
                fs.writeFile('./data.json', JSON.stringify(user, null, 2), (err) => {
                if (err) throw err;
                console.log('Gender has been updated');
                });  
            res.json(user.username= document.getElementById("pUsername").innerHTML)
            res.json(user.firstname= document.getElementById("pFirstname").innerHTML) 
            res.json(user.lastname= document.getElementById("pLastname").innerHTML) 
            res.json(user.age= document.getElementById("pAge").innerHTML) 
            res.json(user.interests= document.getElementById("pInterests").innerHTML) 
            res.json(user.gender= document.getElementById("pGender").innerHTML)  
            res.json(user.matches = document.getElementById("matchList").innerHTML)
        }})



                 
//vis info om match
router.get("/match/info", (req, res)=>{

})

//

module.exports = router;