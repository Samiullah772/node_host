const mongoose =require('mongoose')


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    department:String,
    password:String,
})


const userModel=mongoose.model('userModel',userSchema,'UserData')

module.exports = userModel;
