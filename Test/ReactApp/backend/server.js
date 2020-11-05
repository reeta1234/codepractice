const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/user.route')
const jwt = require('jsonwebtoken')

const corsOptions = {
    origin:'http://localhost:3000',
    credentials:false

}
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.send("get data")
})
const verifyToken=function(req,res,next){
    let token = jwt.sign({'sugnature':'hello'},'secratkey')
    req.somevariable = token
    res.locals.layout = 'layout_user';
    res.set('ree33', token);
    next()
}
app.use("/api",verifyToken,router)
const PORT = process.env.PORT || 8000
app.listen(PORT,function(){
    console.log(`Server startred on ${PORT}`)
})