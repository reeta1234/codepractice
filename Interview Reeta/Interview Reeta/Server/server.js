const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var cookieParser = require('cookie-parser')
const router = require('./Routes/router')

var corsOptions = {
	origin: "http://localhost:4200",
	credentials:false
};

app.use(cookieParser())
let count=0;

function countMiddleware(req,res,next){
    count++;
    res.cookie('count', count);
    console.log(req.cookie)
    console.log('Cookies: ', req.cookies)
    if(next)next();
}

app.use(countMiddleware);



app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("",function(req,res){
    res.send("hello")
})

app.use("/api",router)

const PORT = process.env.PORT || 3000
app.listen(PORT,function(){
    console.log(`Sever run on Port${PORT}`)
})