const express =require('express')
const app =new express()
const route = require('./routes/user')
const db = require('./connection')
const passport= require('passport')
const localStrategy =require('passport-local').Strategy
const userModel =require('./model/user')
const port =8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

passport.use(new localStrategy(async(username,password,done)=>{
  try{
    const userResponse = await userModel.findOne({name:username})
    console.log(userResponse);
    if(!userResponse)
       return done(null,false,{message:'user not found'})
    const passwResponse =userResponse.password === password ? true: false
    if(!passwResponse)
        return done(null,false,{message:'Incorrect Password'})
    else 
      return done(null,userResponse.name)
  }catch(e){
     return done(e,false);
  }
   

}))
app.use(passport.initialize())

//app.use('/user'

app.get('/data',passport.authenticate('local',{session:false}),async(req,res)=>{

    const data =await userModel.find({})
    res.send(data);

})
app.get('/14August',(req,res)=>{
    res.send('Happy Independence Day to All Pakistan')
})

app.listen(port,()=>{
    console.log('Server connected')
})


//
//Farman
//lucky13