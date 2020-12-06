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
            res.json(existingUsers[i])// returnerer oplyningerne for brugeren
		} else {
            res.json({err: "oops...incorrect username or password"}) // viser en error besked hvis oplysningerne ikke passer!
		}
    }
    

//sletter bruger     
router.delete("/delete", (req, res)=>{

})


//opdaterer oplysninger
router.put("/update/firstname", (req, res)=>{
    
})

router.put("/update/lastname", (req, res)=>{
    
})

router.put("/update/age", (req, res)=>{
    
})

router.put("/update/interests", (req, res)=>{
    
})

router.put("/update/gender", (req, res)=>{
    
})



//vis info om match
router.get("/match/info", (req, res)=>{

})

//

module.exports = router;
