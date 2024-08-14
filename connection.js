const mongoose =require('mongoose')


mongoose.connect('mongodb://localhost:27017/User')


const db =mongoose.connection

db.on('connected',()=>{
    console.log('DB connected')
})
db.on('error',()=>{
    console.log('Something went wrone')
})
module.exports =db;