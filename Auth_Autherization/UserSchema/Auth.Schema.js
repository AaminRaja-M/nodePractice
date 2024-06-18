let mongoose = require('mongoose')
let {Schema} = mongoose
let bcrypt = require('bcrypt') //package used to hash the password

let UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

UserSchema.pre('save', async function(next){
    try{
        let salt = await bcrypt.genSalt(10)
        let hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    }catch(error){
        next(error)
    }
})

UserSchema.methods.isValidPassword = async function (password){
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw error
    }
}

let User = mongoose.model('user', UserSchema)
module.exports = User