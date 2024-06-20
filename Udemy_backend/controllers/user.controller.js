let User = require('../Schemas/userSchema')
let { signAccessToken, verifyAccessToken, signRefreshToken, verifyRefreshToken} = require('../helpers/jwt_helper')

let addUser = async(req, res, next) => {
    console.log('adding user');
    try {
        let {username, email, password, role} = req.body
        let doesExist = await User.findOne({email:email})
        // console.log(doesExist);
        if(doesExist) return res.json({error:true, message:"This email is already registered"})

        let user = await User.create({username, email, password, role})
        // console.log(user.id);
        let accessToken = await signAccessToken(user.id)
        let refreshToken = await signRefreshToken(user.id)

        res.json({error:false, message:"User added successfully", accessToken, refreshToken})
    } catch (error) {
        next(error)
    }
}

let login = async(req, res, next) => {
    try {
        let {username, password, role} = req.body
        console.log(username);
        let user = await User.findOne({username:username})
        console.log(user);
        if(user){
            if(user.role == role){
                if(user.password == password){
                    let accessToken = await signAccessToken(user.id)
                    let refreshToken = await signRefreshToken(user.id)
    
                    console.log(accessToken);
                    res.json({error:false, message:"username and password is matching", userData:user, accessToken, refreshToken})
                }else{
                    res.json({error:true, message:"username and password is not matching"})
                }
            }else{
                res.json({error:true, message:`This user is registered as a ${user.role}`})
            }
        }else{
            res.json({error:true, message:"This username is not registered"})
        }
            
    } catch (error) {
        next(error)
    }
}

let refresh_token = async(req, res, next) => {
    console.log('refresh_token');
    try {
        let {refreshToken} = req.body;
        // console.log(refreshToken);
        if(!refreshToken) throw createError.BadRequest()
        let userId = await verifyRefreshToken(refreshToken)

        let accesstoken = await signAccessToken(userId)
        let refToken = await signRefreshToken(userId)

        res.send({accesstoken : accesstoken, refreshToken : refToken})
    } catch (error) {
        next(error)
    }
}

let updateUserDetals = async(req, res, next) => {
    let {id} = req.params;
    console.log(id);
    let {username, email, password, role} = req.body
    let user = await User.findByIdAndUpdate(id)
    console.log(user);
    if(user){
        let updatedUserData = await User.updateOne({_id:user.id}, {username, email, password, role}, {new:true})
        res.json({error:false, message:"User data updated Succeessfully", data:updatedUserData})
    }else{
        res.send({error:true, message:"User not found for this id"})
    }
}

let displayAllUsers = async() => {
    try {
        let users = await User.find()
        res.send({error:false, message:"total user details fetched successfully", data:users})
    } catch (error) {
        next(error)
    }
}

let displayAdminUsers = async(req, res, next) => {
    try {
        let admins = await User.find({role:"admin"})
        console.log(admins);
        res.send({error:false, message:"admins details fetched successfully", data:admins})
    } catch (error) {
        next(error)
    }
}

let displayInstructorUsers = async(req, res, next) => {
    try {
        let instructors = await User.find({role:"instructor"})
        console.log(instructors);
        res.send({error:false, message:"instructors details fetched successfully", data:instructors})
    } catch (error) {
        next(error)
    }
}

let displayStudnetUsers = async(req, res, next) => {
    try {
        let students = await User.find({role:"student"})
        console.log(students);
        res.send({error:false, message:"students details fetched successfully", data:students})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addUser,
    login,
    refresh_token,
    updateUserDetals,
    displayAllUsers,
    displayAdminUsers,
    displayInstructorUsers,
    displayStudnetUsers
}