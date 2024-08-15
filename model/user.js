const mongoose =require('mongoose')
const bcrypt =require('bcrypt')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    department:String,
    password:String,
})

userSchema.pre('save',async function(next){
    const person =this
    if(!person.isModified('password')) return next();

    try{
        // Generate salt
        const salt =await bcrypt.genSalt(10)
        // Generate hasing
        const hasspassword=await bcrypt.hash(person.password,salt)
        person.password=hasspassword

        next();

    }catch(e){
        return next(e)
    }
})

userSchema.methods.comparePassword = async function(candidatePassword){
    try{
        const isMatch = await bcrypt.compare(candidatePassword,this.password)
        return isMatch;
    }catch(e){
        throw e
    }
}





const userModel=mongoose.model('userModel',userSchema,'UserData')

module.exports = userModel;
