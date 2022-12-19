//import controller
const checkCredentials = require('./auth.controllers')

//Import jwt
const jwt = require('jsonwebtoken')
//Import secret word for token
const jwtSecret = require('../../config').api.jwtSecret

const logIn = (req,res) => {
    const {email,password} = req.body
    if(email && password){
        checkCredentials(email,password)
        .then( data => {
        if(data){
            //Receives object with user data and secret word, returns a token
            const token = jwt.sign({
                id: data.id,
                user_name: data.user_name,
                role: data.role

            },jwtSecret)
            res.status(200).json({
                message: "Correct Credentials",
                token
            })
        }else{
            res.status(401).json({message: "Invalid Credentials"})
        }
        })
        .catch(error => res.status(400).json({message: error.message}))

    }else{
        res.status(400).json({message:"Missing data", fields: {email:"example@email.com",password:"mypassword123"}})
    }
  
} 

module.exports = {logIn}