const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

var savedPassword = ""

router.get("/", function(req,res) {

    console.log("did you hit router/ user path??")

})

router.post("/login", function(req,res) {

    const password = req.body.password;

    bcrypt.compare(password, savedPassword, function(err, result) { 
        if (result) {
            res.send("logged in")
        } else {
            res.send("not logged in")
        }
    })

})

module.exports = router;

