let {model, Schema} = require('mongoose')

let studentSchema = new Schema({
    first_name : {
        type:String,
        required:{value:true, message:'First name is mandatory'}
    },
    last_name : {
        type:String,
        required:{value:true, message:'Last name is mandatory'}
    },
    phone_number : {
        type:Number,
        required:{value:true, message:"Phone number is mandatory"}
    },
    address : {
        type:String,
        required:{value:true, message:"Address is mandatory"}
    },
    email : {
        type:String,
        required:{value:true, message:"Email address is mandatory"}
    },
    age : {
        type:Number,
        required:{value:true, message:"Age is mandatory"}
    }
}, {timestamps:true})

module.exports = model('student', studentSchema)