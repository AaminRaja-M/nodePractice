let express = require('express')

let {addUser, login, refresh_token, displayAdminUsers, displayInstructorUsers, displayStudnetUsers, displayAllUsers, updateUserDetals} = require('../controllers/user.controller')

let router = express.Router()

router.post('/register', addUser)
router.post('/login', login)
router.post('/refresh_token', refresh_token)
router.put('/updateUser/:id', updateUserDetals)
router.get('/usersList', displayAllUsers)
router.get('/adminsList', displayAdminUsers)
router.get('/instructorsList', displayInstructorUsers)
router.get('/studentsList', displayStudnetUsers)

module.exports = router;