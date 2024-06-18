let express = require('express')
let router = express.Router()
let createError = require('http-errors');
const User = require('../UserSchema/Auth.Schema');
let {authSchema} = require('../helpers/validation_schema')
let {signAcessToken, signRefreshToken, verifyRefreshToken} = require('../helpers/jwt_helper');
const { error } = require('@hapi/joi/lib/base');
const { verify } = require('jsonwebtoken');

router.post('/register', async(req, res, next) => {
    console.log(req.body);
    try{
        // let {email, password} = req.body
        // if(!email || !password) throw createError.BadRequest()

        let result = await authSchema.validateAsync(req.body) //validate the req.body by using joi package(@hapi/joi)
        console.log(result);
        
        let doesExist = await User.findOne({email:result.email})
        console.log(doesExist);
        if(doesExist) throw createError.Conflict(`${result.email} is already been registered`)

        let user = new User(result)
        let savedUser = await user.save()
        console.log(savedUser);
        let accesstoken = await signAcessToken(savedUser.id)
        let refreshToken = await signRefreshToken(savedUser.id)
        
        res.send({accesstoken, refreshToken})
    }catch(error){
        if(error.isJoi) error.status = 422
        next(error)
    }
})

router.post('/login', async(req, res, next) => {
    try {
        let result = await authSchema.validateAsync(req.body)
        // console.log(result);
        let user = await User.findOne({email:result.email})
        // console.log(user);
        if(!user) throw createError.NotFound("user not registered")

        let isMatch = await user.isValidPassword(result.password)
        if(!isMatch) throw createError.Unauthorized("username or password is not valid")
        
        let accesstoken = await signAcessToken(user.id)
        let refreshToken = await signRefreshToken(user.id)

        res.send({accesstoken, refreshToken})
    } catch (error) {
        if(error.isJoi) return next(createError.BadRequest('Inavlid email address or password'))
        next(error)
    }   
})

router.post('/refresh-token', async(req, res, next) => {
    try {
        let {refreshToken} = req.body;
        if(!refreshToken) throw createError.BadRequest()
        let userId = await verifyRefreshToken(refreshToken)

        let accesstoken = await signAcessToken(userId)
        let refToken = await signRefreshToken(userId)

        res.send({accesstoken : accesstoken, refreshToken : refToken})
    } catch (error) {
        next(error)
    }
})

router.delete('/logout', (req, res, next) => {
    res.send("logout route")
})

module.exports = router