var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/plain"})
    res.write('Hello World!');
    res.end("Hello")
}).listen(80)

var express= require("express")
var app = express();
var router = express.Router()
var cors = require("cors");
var path = require('path')
var cookies= require("cookie-parser")
var body = require("body-parser");
var session = require("express-session")
app.set("view engine","pug")
app.set("views","/public/view")
var mysql = require("mysql")

var connect = mysql.createConnection({

})
connect.connect(function(erro){

})
connect.query("",function(error,row,field){

})
app.use(function(req,res,next){
    console.log('middleware1')
    next()
})
//app.use(cors)
app.use("/",function(req,res,next){
    console.log('middleware2')
    next()
})
app.use(cookies())
app.use(body.json())
app.use(body.urlencoded({extend:true}))
app.use(session({secert:'zv'}))
app.use(express.static("public")) // in html template we will use <script src="/test.js"></script><img src="img.jpg">
app.get("/",function(req,res){
    res.send("Hello get")
})
app.get("/profile/:id([0-9]{2})",function(req,res){
    res.send("Hello profile:"+req.params.id)
})

app.get("/path",function(req,res){
    console.log(__dirname)
    res.sendFile(path.join(__dirname+"/test.html"))
    //res.send("Hello get")
})
app.get("/pug",function(req,res){
    res.render("index",{message:'Heloo'})
})
app.get("/coe",function(req,res){
    res.send("Page not found")
})
app.get("/c",function(){
    res.cookies("fname","Reeta",{maxAge:2000})
    res.send(req.cookies)
})
app.get("*",function(req,res){
    res.send("Page not found")
})
app.listen(802,function(){
    console.log("Start")
})