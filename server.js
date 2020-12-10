//henter express
const express = require('express');
const app = express();
//henter cors - cors sørger for at andre servere kan tilgå dataen... https://www.youtube.com/watch?v=zoSJ3bNGPp0
const cors = require('cors')
app.use(cors())
app.use(cors());

//middleware : fs, body-parser - lader os tilgå JSON data https://www.youtube.com/watch?v=zoSJ3bNGPp0
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const fs = require('fs');
//middleware som lader mig tilgå mine statiske filer 
app.use(express.static("view"));
  

//route til loginsiden - roden 
app.get("/", (req, res) => {
res.sendFile(__dirname + "/view/login.html");
})


const router = require("./controller/user.js");
app.use("/create", router)
app.use("/login/:username", router)
app.use("/logout/:username", router)
app.use("/delete/:username", router)
app.use("/update/firstname", router)
app.use("/update/lastname", router)
app.use("/update/age", router)
app.use("/update/interests", router)
app.use("/update/gender", router)
app.use("/match/about", router)
app.use("/match/like", router)
app.use("/match/dislike", router)
app.use("/match/delete", router)

app.listen(3000)


/*
app.get("/users", (req,res)=>{
  let users = JSON.parse(fs.readFileSync("data.json"))
  res.status(200).json(users)
})
*/













