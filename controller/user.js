const userModel =require('../model/user')

async function handleRegisterNewUser(req,res){
    try{
    const data =req.body;
    const response =await userModel.create(data);
    res.status(201).send('Account Created Successfully')
    }catch(e){
        res.send(e.message)
    }

}
async function handleShowUsers(req,res){
    try{
        const response =await userModel.find({});
        res.status(200).send(response)
    }catch(e){
        res.send(e.message)
    }
}

module.exports ={
    handleRegisterNewUser,
    handleShowUsers
}