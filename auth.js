const passport= require('passport')
const localStrategy =require('passport-local').Strategy
const userModel =require('./model/user')


passport.use(new localStrategy(async(username,password,done)=>{
    try{
      const userResponse = await userModel.findOne({name:username})
      console.log(userResponse);
      if(!userResponse)
         return done(null,false,{message:'user not found'})
      const passwResponse =userResponse.password == password ? true: false
      if(passwResponse)
        return done(null,username)
      else 
        return done(null,false,{message:'Incorrect Password'})
    }catch(e){
       return done(e,false);
    }
     
  
  }))
  

  module.exports=passport;
  

