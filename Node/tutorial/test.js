var express = require('express')
var app = express()
var router = require('./router')
var bodyparser = require('body-parser')
var cookie = require("cookie-parser")
var session = require("express-session")
//var template = require("pug") it is not requir to include
app.set('view engine', 'pug')
app.set("views",'./views')
app.use(cookie())
app.use(session({'secret':'abc'}))
// app.use(bodyparser.json())

// app.use(express.static('foleder path'))
// app.use(cookie)

// app.use(bodyparser.urlencoded({extended:true}))

// function loginfo(req,res,next){
//     console.log("Hjjjjjjjjjjjjj")
//     next()
// }

// app.use("/profile/:id([0-3]{1})",loginfo)
// app.use("/",router)

app.get("/cooietset",function(req,res){
    res.cookie("fname","Reeta",{maxAge:1000})
    res.cookie("lname","Prajapati")
    res.send("cookies test")
})

app.get("/getcokie",function(req,res){
    console.log('dasfsa')
    res.send("getcokie test"+req.cookies.fname)
})

app.get("/sets",function(req,res){
    if(req.session.count){
        req.session.count++
    }else{
        req.session.count = 1
    }
    res.send("sets test"+req.session.count)
})

var server =  app.listen(8000,function(){
    var host  = server.address().address;
    var port = server.address().port
    console.log("http://%s:%s",host,port)
})
