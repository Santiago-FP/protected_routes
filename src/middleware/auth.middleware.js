// import jwt tools
//login type
const JwtStrategy = require('passport-jwt').Strategy
//extracts tokens from request
const ExtractJWT = require('passport-jwt').ExtractJwt

const passport = require('passport')

const jwtSecret = require('../../config').api.jwtSecret
const {findUserById} = require('../users/users.controllers')


    const options = {
        jwtFromRequest : ExtractJWT.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: jwtSecret
    }
    passport.use(
        new JwtStrategy(options,async (tokenDecoded,done) => {
            //done receives 2 params:(error,tokenDecoced) 
            try{
                const user = await findUserById(tokenDecoded.id)
                if(!user){
                    return done(null,false) //no error but no user
                }else{
                    return done(null,tokenDecoded)//no error, and user found
                }
            }catch(error){
                return done(error,false) //error and no user
            }
        })
    )





module.exports = passport