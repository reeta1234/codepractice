// var http = require('http')

// http.createServer(function(req,res){
//     res.writeHead(200,{'Contect-type':'text/html'})
//     res.end('Hello Node')
// }).listen(80)

var express = require('express');
var app = express()
var cookiesParser = require('cookie-parser')
var sessionParser = require("express-session")
var bodyParser = require('body-parser')
app.set('view engine','pug');
app.set('views','./views')

app.use(function(req,res,next){
    console.log("Hello Middleware")
    next()
})

app.use(cookiesParser())
app.use(sessionParser({'secret':'xyz'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/static",express.static('public'))

app.get("/",function(req,res){
    res.send("Hello GET")
})

app.get("/c_test",function(req,res){
    res.cookie("fname","Reeta",{maxAge:1000})
    res.send("Hello Cookie Test")
})

app.get("/get_c",function(req,res){
    //console.log(JSON.parse(JSON.stringify(req.cookies)))
    res.send("Get Cookie Test"+req.cookies.fname)
})

app.get("/s_test",function(req,res){
    if(!req.session.city_in_session)
        req.session.city_in_session= 'Bangalore'
    res.send("SessionTest Test")
})

app.get("/get_s",function(req,res){
    res.send("SessionTest Test"+req.session.city_in_session)
})


app.get("/profile/:id([0-3]{1})",function(req,res){
    res.send("Get Profile Test")
})

app.get("*",function(req,res){
    res.send("Page not found")
})

var server = app.listen(8000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("http://%s:%s",host,port)
})