const express = require("express");
const router = express.Router();


router.post('/', (req, res)=> {
    res.json({ "message" : "Match created"});
});
router.get('/', (req, res)=> {
});
router.put('/', (req, res)=> {
    res.json({ "message" : "Updated match"});
});
router.delete('/', (req, res)=>{
    res.json({ "message" : "Deleted match"});
});

module.exports = router;