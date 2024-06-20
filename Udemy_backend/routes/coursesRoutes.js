let express = require('express')

let {addCourse, displayAllCourses} = require('../controllers/courses.controller')

let router = express.Router()

router.post('/addCourse', addCourse)
router.get('/displayAllCourses', displayAllCourses)

module.exports = router;