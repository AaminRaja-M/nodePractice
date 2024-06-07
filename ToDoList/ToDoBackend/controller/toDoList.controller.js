let {json} = require('express')
let Task = require('../model/toDoList.schema')

let addTask = async(req, res, next) => {
    console.log('Adding task');
    try{
        let {task, status, tdate} = req.body
        let newTask = await Task.create({task, status, tdate})
        console.log(newTask);
        res.json({error:false, message:'New task added successfully', newtask:newTask})
    }catch(error){
        next(error)
    }
}

let getTasks = async(req, res, next) => {
    console.log('fetching all tasks');
    try{
        let tasks = await Task.find()
        res.json({error:false, message:'fetched all tasks successfully', TotalTasks:tasks})
    }catch(error){
        next(error)
    }
}

// let getTask = async(req, res, next) => {
//     console.log('updating only one data');
//     try{
//         let {id} = req.params;
//         let {task, status, tdate} = req.body
//         console.log(req.body);
//         let taskToUpdate = await Task.findByIdAndUpdate(id)
//         if(!taskToUpdate){
//             res.json({error:true, message:'Not found a task with this id'})
//         }else{
//             let updatedTask
//         }
//     }catch(error){
//         console.log(error);
//     }
// }

let updateTask = async(req, res, next) => {
    try{
        let {id} = req.params
        let {task, status, tdate} = req.body
        console.log(req.body);
        let taskToUpdate = await Task.findByIdAndUpdate(id)
        if(!taskToUpdate){
            res.json({error:true, message:'task not found by this id'})
        }else{
            let taskUpdated = await Task.updateOne({_id:id}, {task, status, tdate}, {new:true})
            res.json({error:false, message:'Task updated successfully'})
        }
    }catch(error){
        next(error)
    }
}

let deleteTask = async(req, res, next) => {
    try{
        let {id} = req.params
        let taskToDelete = await Task.findById(id)
        if(!taskToDelete){
            res.json({error:true, message:'Task not found by this id'})
        }else{
            let taskDeleted = await Task.deleteOne({_id:id})
            res.json({error:false, message:'Task deleted successfully', deletedTask:taskDeleted})
        }
    }catch(error){
        next(error)
    }
}

module.exports = {addTask, getTasks, updateTask, deleteTask}