const express= require('express')
const route =express.Router()
const {handleRegisterNewUser,handleShowUsers} =require('../controller/user')



route.post('/',handleRegisterNewUser)
route.get('/',handleShowUsers)

module.exports=route;