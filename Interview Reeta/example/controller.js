const customers = require("../models/db");

const getAll = function(req,res){
    customers.getAll((err,data)=>{
        if (err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Tutorials."
            });
        }
        else res.send(data);
    });
}

const findById =function(req,res){
    customers.findById(req.params.customerId,(err,data)=>{
        if(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving customers."
            });
        }else{
            res.send(data)
        }
    })
}

const create =function(req,res){
	console.log(req.body)
    if(!req.body){
        res.status(400).send({
            message:"Empty"
        })
    }
    customer = new customers(req.body)
    customers.create(customer,(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message || "Some error occurred while retrieving customers."
            })
        }else{
            res.send({status:'success',data:data})
        }
    });
}

const update =function(req,res){
    console.log(req.body);
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }
    customer = new customers(req.body)
    customers.update(req.params.customerId,customer,(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message || "Some error occurred while retrieving customers."
            })
        }else{
            res.send({status:'success',data:data})
        }
    });
}

const deletes = function(req,res){
    customers.delete(req.params.customerId,(err,data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            })
        }else{
            res.send(data)
        }
    });
}

const deleteAll =function(req,res){
   customer.deleteAll((err,data)=>{
       if(err){
           res.status(500).send({
               message:err.message || "Some error occurred while retrieving customers."
           })
       }else{
           res.send(data)
       }
   })
}

module.exports = {
    getAll:getAll,
    findById:findById,
    create:create,
    update:update,
    delete:deletes,
    deleteAll:deleteAll
}