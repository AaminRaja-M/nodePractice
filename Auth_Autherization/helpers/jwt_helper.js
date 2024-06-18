let JWT = require('jsonwebtoken')
let createError = require('http-errors')
const { token } = require('morgan')


module.exports = {
    signAcessToken: (userId) => {
        return new Promise((resolve, reject) => {
            let payload = {}
            let secret = process.env.ACCESS_TOKEN_SECRET
            let options = {
                expiresIn : "30s",
                issuer: "pickurpage.com",
                audience: userId
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if(err) {
                    console.log(err.message);
                    return reject(createError.InternalServerError())
                }
                resolve(token)
            })
        })
    },

    verifyAccessToken : (req, res, next) => {
        // console.log(Boolean(!req.headers['authorization']));
        if(!req.headers["authorization"]) return next(createError.Unauthorized())
        let token = req.headers["authorization"]
        // console.log(token);
        // console.log(process.env.ACCESS_TOKEN_SECRET);
        JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload)=> {
            if(err){
                // if(err.name === 'JsonWebTokenError'){
                //     return next(createError.Unauthorized())
                // }else{
                //     return next(createError.Unauthorized(err.message))
                // }
                let message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
                console.log(message);
                return next(createError.Unauthorized(message))
            }
            req.payload = payload
            next()
         })
    },

    signRefreshToken : (userId) => {
        return new Promise((resolve, reject) => {
            let payload = {}
            let secret = process.env.REFRESH_TOKEN_SECRET
            let options = {
                expiresIn : "1y",
                issuer: "pickurpage.com",
                audience: userId
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if(err) {
                    console.log(err.message);
                    return reject(createError.InternalServerError())
                }
                resolve(token)
            })
        })
    },
    verifyRefreshToken : (refreshToken) => {
        return new Promise((resolve, reject) => {
            JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
                if(err) return reject(createError.Unauthorized())
                let userId = payload.aud

                resolve(userId)
            })
        })
    }
}