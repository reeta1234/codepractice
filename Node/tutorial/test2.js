// var http = require('http')

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.end("Heel")
// }).listen(80)

var express = require('express')
var app = express()
var router = express.Router()
var bodyParser = require("body-parser")
var cookieParser = require('cookie-parser')
var sessionParser = require('express-session')
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'classicmodels'
})

connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
})

connection.query('SELECT* from customers limit 10', function (err, rows, fields) {
    if (err) throw err
  
    console.log('The solution is: ', rows)
  })
  
connection.end()

app.set('view engine','pug')
app.set('views','./views')

app.use(function(req,res,next){
    console.log("middle ware")
    next()
})

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended':true}))
app.use(cookieParser())
app.use(sessionParser({'secret':'xyz'}))

app.get("/",function(req,res){
    res.send("Hello Get")
})
app.get("/c",function(req,res){
    res.cookie('fname','Reeta',{maxAge:200000})
    res.send("Hello Get")
})
app.get("/ct",function(req,res){
    res.send("Hello Get"+req.cookies.fname)
})
app.get("/s",function(req,res){
    req.session.city='Bangalore'
    res.send("Hello Get")
})
app.get("/st",function(req,res){
    res.send("Hello Get"+req.session.city)
})

app.get("/profile/:id([0-3]{1})",function(req,res){
    res.send("Hello Get")
})

app.get("*",function(req,res){
    res.send("Page not found")
})

var server = app.listen(80,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("http://%s%s",host,port)
})

