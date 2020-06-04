// var http = require('http')

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/plain'});
//     res.end("Hello Worls")
// }).listen(8000)

var express = require('express')
var app = express()
var router = require('./Route/route')
var path = require('path')

app.use("/",router)

app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
  }, function (req, res,next) {
    //res.send('Hello from B!')
    next()
  },function (req, res) {
    res.send('Hello from C!')
  })

  app.get('/hello',function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
  });

var server = app.listen(8000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})