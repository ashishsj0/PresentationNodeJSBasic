const express = require('express');
const router = express.Router();

router.get("/", function(req,res) {

    console.log("did you hit router/ employee path??")

})

module.exports = router;