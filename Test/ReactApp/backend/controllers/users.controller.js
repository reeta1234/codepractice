const users = require("../models/user.model")

console.log(users)

// get All users
exports.getAll = async function(req,res){
    console.log(res.locals.layout)
    users.getAll((error,data)=>{
        if (error){
            res.status(500).send({
                message:
                error.message || "Somthing went wrong"
            });
        }
        else res.send({'status':'success','data':data,token:req.somevariable})
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

// Get user by Name
exports.getByName = function(req,res){
    const userName = req.params.userName
    users.getByName(userName,(error,data)=>{
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

    console.log(req.body)
    newUser = new users(req.body)
    users.createUser(newUser,(error,data)=>{
        if(error){
            res.status(404).send({
                message:error.message || "Somthing went wrong"
            })
        }
        else res.send({'status':'success','data':data})
    })
}

// Update
exports.update=function(req,res){

    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }
    newUser = new users(req.body)
    users.updateUser(req.params.userId,newUser,(error,data)=>{
        if(error){
            res.status(404).send({
                message:error.message || "Somthing went wrong"
            })
        }
        else res.send({'status':'success','data':data})
    })
}

exports.deleteUser = function(req,res){
    users.deleteUser(req.params.userId,(err,data)=>{
        if(err){
            res.status(500).send({
                message:error.message || "Somthing went wrong"
            })
        }else{
            res.send(data)
        }
    });
}

exports.deleteAll = function(req,res){
    users.deleteAll((err,data)=>{
        if(err){
            res.status(500).send({
                message:error.message || "Somthing went wrong"
            })
        }else{
            res.send(data)
        }
    });
}