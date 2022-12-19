//import router
const router = require('express').Router()
//Import services
const authServices = require('./auth.services')

//define routes
router.post('/login',authServices.logIn)

module.exports = router