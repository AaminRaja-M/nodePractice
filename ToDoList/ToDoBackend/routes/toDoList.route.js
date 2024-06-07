let express = require('express')
let {addTask, getTasks, updateTask, deleteTask} = require('../controller/toDoList.controller')

let router = express.Router();
router.post('/addTask', addTask)
router.get('/getTasks', getTasks)
router.put('/updateTask/:id', updateTask)
router.delete('/deleteTask/:id', deleteTask)

module.exports = router;