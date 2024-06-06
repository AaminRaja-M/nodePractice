let express = require('express')
let studentRoutes = require('./routes/student.route')
let connectDatabase = require('./db/connectDb')
let cors = require('cors')
require('dotenv').config();

let app = express()
app.use(cors())

app.use(express.json())
app.use('/api/student', studentRoutes)

app.use('*', (req, res) => {
    res.json({error:true, message:"Page not found"})
})

app.use((err, req, res, next) => {
    res.json({error:true, message:err})
})

let startServer = async() => {
    try{
        await (connectDatabase(process.env.PORT))
        console.log('mongoDB connected successfully');

        app.listen(4000, () => {
            console.log('server is running at port : http://localhost:4000');
        })
    }catch(error){
        console.log(error);
    }
}

startServer()