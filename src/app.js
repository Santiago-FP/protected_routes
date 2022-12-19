const express = require('express')

const app = express()
const db = require('./utils/database')
const port = require('../config').api.port
//Routers
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
//connect to db
db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Synced'))
    .catch((err) => console.log(err))

//enables use of json
app.use(express.json())
//test connection to server
app.get('/',  (req, res) => {
    res.status(200).json({message: 'Ok!'})
})

//use routers
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth',authRouter)
 //start the server
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})