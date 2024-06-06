const { json } = require('express');
let Student = require('../model/student.schema')

let addStudent = async(req, res, next) => {
    console.log('I am adding student');
    try{
        let { first_name, last_name, phone_number, address, email, age} = req.body
        let student = await Student.create({first_name, last_name, phone_number, address, email, age})
        console.log(student);
        res.json({error:false, message:'Student added successfully'})
    }catch(error){
        next(error)
    }
}

let getStudents = async(req, res, next) => {
    console.log('Enter the getStudents middleware');
    try{
        let students = await Student.find()
        res.json({error:false, message:"Students fetched successfully", data:students})
    } catch (error){
        next(error)
    }
}

let getStudent = async(req, res, next) => {
    console.log('Enter the getStudent middleware');
    try{
        let {id} = req.params;
        console.log(id);
        let student = await Student.findById(id);
        console.log(student);
        if(!student){
            res.json({error:true, message:"student not found for this id"})
        }else{
            res.json({error:false, message:"Student data fetched successfully", data:student})
        }
    }catch(error){
        next(error);
    }
}

let updateStudent = async(req, res, next) => {
    try{
        let {id} = req.params;
        let {first_name, last_name, phone_number, address, email, age} = req.body
        console.log(req.body);
        let student = await Student.findByIdAndUpdate(id)
        if(!student){
            res.json({error:true, message:"student not found by this id"})
        }else{
            let student = await Student.updateOne({_id:id}, {first_name, last_name, phone_number, address, email, age}, {new:true})
            res.json({error:false, message:"Student updated successfully", data:student})
        }
    }catch(error){
        next(error)
    }
}

let deleteStudent = async(req, res, next) => {
    try{
        let {id} = req.params
        let student = await Student.findById(id)
        if(!student){
            res,json({error:true, message:'Student not found by this id'})
        }else{
            let student = await Student.deleteOne({_id:id})
            res.json({error:false, message:"Student deleted successfully", data:student})
        }
    }catch(error){
        next(error)
    }
}

module.exports = {addStudent, getStudents, getStudent, updateStudent, deleteStudent}