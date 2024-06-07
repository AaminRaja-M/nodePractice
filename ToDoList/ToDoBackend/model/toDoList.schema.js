let {model, Schema} = require('mongoose')

let toDoListSchema = new Schema({
    task : {
        type:String,
        required:{value:true, message:'task is mandatory'}
    },
    status : {
        type:Boolean,
        required:{value:true, message:'status is mandatory'}
    },
    tdate : {
        type:String,
        required:{value:true, message:'date is mandatory'}
    }
}, {timestamps:true})

module.exports = model('task', toDoListSchema)