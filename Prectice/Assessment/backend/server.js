const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/user.route')

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
app.use("/api",router)
const PORT = process.env.PORT || 8000
app.listen(PORT,function(){
    console.log(`Server startred on ${PORT}`)
})