//Import crypto functions
// const {hashPassword} = require('../utils/crypto')
const {comparePassword} = require('../utils/crypto')
//find user by email
const findUserByEmail = require('../users/users.controllers').findUserByEmail


const checkCredentials = async (email,password) => {
    //obtains user data with email(including the hashed password)
    // will return true if credentials are valid
    try{
        const userData = await findUserByEmail(email)
        const validCredentials = await comparePassword(password,userData.password)
        if(validCredentials){
        return(userData)
        }else{
        return null
        }
    } catch(error){
        return null
    }
    
    
};

module.exports = checkCredentials
