var express = require('express')
var controller = require("../controller/controller")

var route = express.Router()

route.get("/",controller.list)

// route.get("/",function(req,res){
//     res.send("Hello fro route")
// })

module.exports =  route