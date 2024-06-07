let express = require('express')
let taskRoutes = require('./routes/toDoList.route')
let connectDatabase = require('./db/connectDB')
let cors = require('cors')
require('dotenv').config();

let app = express()
app.use(cors())

app.use(express.json())
app.use('/api/task', taskRoutes)

app.use('*', (req, res) => {
    res.json({error:true, message:'page not found'})
})

app.use((err, req, res, next) => {
    res.json({error: true, message:err})
})

let startServer = async() => {
    try{
        await (connectDatabase(process.env.PORT))
        console.log('mongoDB connected successfully');
        
        app.listen(3500, () => {
            console.log(`server is running at port : http://localhost:3500`);
        })
    }catch(error){
        console.log(error);
    }
}

startServer()