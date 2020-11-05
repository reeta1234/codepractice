const users = require("../models/user.model")

console.log(users)

// get All users
exports.getAll = async function(req,res){
    users.getAll((error,data)=>{
        if (error){
            res.status(500).send({
                message:
                error.message || "Somthing went wrong"
            });
        }
        else res.send({'status':'success','data':data})
    })
}


// Get user by Id
exports.getByID = function(req,res){
    const userId = req.params.userId
    users.getById(userId,(error,data)=>{
        if(error){
            res.status(404).send({
                message:error.message || "Somthing went wrong"
            })
        }
        else res.send({'status':'success','data':data})
    })
}

// Login
exports.getByUserName = function(req,res){
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }
    const user = req.body
    users.getByUserName(user,(error,data)=>{
        if(error){
            res.status(404).send({
                message:error.message || "Somthing went wrong"
            })
        }
        else res.send({'status':'success','data':data})
    })
}

// Registration
exports.create=function(req,res){

    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }
    newUser = new users(req.body)
    users.create(newUser,(error,data)=>{
        if(error){
            res.status(404).send({
                message:error.message || "Somthing went wrong"
            })
        }
        else res.send({'status':'success','data':data})
    })
}

exports.deleteUser = function(req,res){
    users.delete(req.params.userId,(err,data)=>{
        if(err){
            res.status(500).send({
                message:error.message || "Somthing went wrong"
            })
        }else{
            res.send(data)
        }
    });
}