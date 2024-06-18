let express = require('express')
let morgan = require('morgan')
let createError = require('http-errors')
require('dotenv').config()
require('./helpers/init_mongoDB')
let {verifyAccessToken} = require('./helpers/jwt_helper')

let AuthRoute = require('./Routes/Auth.route')

let app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', verifyAccessToken, async(req, res, next) => {
    
    res.send("Hello from express")
})

app.use('/auth', AuthRoute)

app.use(async(req, res, next) => {
    // let error = new Error('Not found')
    // error.status = 404
    // next(error)
    next(createError.NotFound('This route does not exist'))
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error:{
            status : err.status || 500,
            message : err.message
        }
    })
})

let PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server is running at port : http://localhost:${PORT}`);
})