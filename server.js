const express =require('express')
const app =new express()
const route = require('./routes/user')
const db = require('./connection')
const passport =require('./auth')
const userModel =require('./model/user')

const port =8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(passport.initialize())
app.use('/user',route)

const localAuth=passport.authenticate('local',{session:false});

app.get('/data',localAuth,async(req,res)=>{

    const data =await userModel.find({})
    res.send(data);

})
app.listen(port,()=>{
    console.log('Server connected')
})