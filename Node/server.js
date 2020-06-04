var express = require('express')
var app = express()
var body = require('body-parser')
var cors = require('cors')
app.use(cors())
app.use(body.json())
app.get('/',function(req,res){
    res.send('Hello')
})
app.post('/enroll',function(req,res){
    console.log(req.body)
    console.log(JSON.stringify(req.headers));
    console.log(req.get('authToken'))
    res.send({"message": "Data received"})
})

app.post("/login",function(req,res){
    console.log(req.body)
    res.send({"message":'Login successfully'})
})
app.listen(3000,function(){
    console.log('start')
})
