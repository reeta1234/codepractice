var express = require('express');
var router = express.Router()
var path = require('path')

router.get("/",function(req,res){
    console.log('Hello India')
    res.send("Hello from router index")
})

router.get("/profile/:id([0-3]{1})",function(req,res){
    res.send("Hello from profile id: "+req.params.id)
})
//default template engin
router.get("/html",function(req,res){
    res.sendFile(path.join(__dirname+"/index.html"))
})

router.get("/pug",function(req,res){
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

router.get("*",function(req,res){
    res.send("Page not found")
})

module.exports = router