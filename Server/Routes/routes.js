const express = require('express');
const router = express.Router();

const userRoute = require('./user')
const employeeRoute = require('./employee')

router.use('/user',userRoute)
router.use('/employee',employeeRoute)

module.exports = router;