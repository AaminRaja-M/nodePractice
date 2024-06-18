let joi = require('@hapi/joi')

let authSchema = joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi.string().min(2).required()
})

module.exports = {
    authSchema
}