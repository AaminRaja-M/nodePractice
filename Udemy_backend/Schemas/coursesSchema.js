let {Schema, model} = require("mongoose")

let CoursesSchema = new Schema({
    course_name : {
        type:String,
        required:{value:true, message:"courese name is mandatory"},
        unique:{value:true, message:"This course name is already using"},
        // minlength:{value:4, message:"minimum length of course name is 4"},
        // maxlength:{value:50, message:"maximum length of course name is 50"}
    },
    course_description:{
        type:String,
        required:{value:true, message:"courese description is mandatory"},
        unique:{value:true, message:"This course description is already using"},
        // minlength:{value:15, message:"minimum length of course description is 15"},
        // maxlength:{value:200, message:"maximum length of course description is 200"}
    },
    course_price:{
        type:String,
        required:{value:true, message:"courese price is mandatory"}
    },
    number_of_students:{
        type:String,
        required:{value:true, message:"total number of students is mandatory"}
    },
    rating:{
        type:String,
        required:{value:true, message:"rating of course is mandatory"}
    },
    number_of_ratings:{
        type:String,
        required:{value:true, message:"number of total ratings is mandatory"}
    },
    language:{
        type:String,
        required:{value:true, message:"language is mandatory"}
    }
})

let Courses = model("Courses", CoursesSchema)
module.exports = Courses