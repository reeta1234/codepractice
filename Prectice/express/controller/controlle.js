const city = require("../models/model")

console.log(city)

exports.getAll = function(req,res){
    city.getAll((error,data)=>{
        if (error){
            res.status(500).send({
                message:
                error.message || "Some error occurred while retrieving Tutorials."
            });
        }
        else {
            req.headers['someHeader'] = 'someValue'
            res.send({'status':'success','data':data})
        }
    })
}

exports.getByID = function(req,res){
    const cityId = req.params.cityId
    city.getById(cityId,(error,data)=>{
        if(error){
            res.status(404).send({
                message:error.message || "Somthing went wrong"
            })
        }
        else res.send({'status':'success','data':data})
    })
}

exports.create=function(req,res){
    if(!req.body){
        res.status(500).send({
            message:'empty data'
        })
    }
    newCity = new city.city(req.body)
    city.create(newCity,(error,data)=>{
        if(error){
            res.status(404).send({
                message:error.message || "Somthing went wrong"
            })
        }
        else res.send({'status':'success','data':data})
    })
}