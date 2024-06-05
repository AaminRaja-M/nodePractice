let express = require('express')
let router = express.Router()

// middleware that is specific to this router

let timeLog = (req, res, next) => {
    console.log('Time:', Date.now());
    next()
}
router.use(timeLog)

router.get('/', (req, res) => {
    res.send('Birds home page')
})

router.get('/about', (req, res) => {
    res.send('About birds');
})

module.exports = router
