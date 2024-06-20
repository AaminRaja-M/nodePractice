let Courses = require('../Schemas/coursesSchema')

let addCourse = async(req, res, next) => {
    console.log('adding new course');
    try {
        let{course_name, course_description, course_price, number_of_students, rating, number_of_ratings, language} = req.body
        console.log(req.body);
        console.log(course_name);
        let doesExist = await Courses.findOne({course_name:course_name})
        if(doesExist){
            return res.json({error:true, message:"A course with this name is already exist in this application, Give another name for your course"})
        }else{
            let newCourse = await Courses.create({course_name, course_description, course_price, number_of_students, rating, number_of_ratings, language})
        }
        res.json({error:false, message:"New course is added successfully", accessToken, refreshToken})
        
    } catch (error) {
        next(error)
    }
}

let displayAllCourses = async(req, res, next) => {
    try {
        let courses = await Courses.find()
        res.send({error:false, message:"fetched all courses successfully", courses:courses})
    } catch (error) {
        next(error)
    }
}
 
module.exports = {addCourse, displayAllCourses}