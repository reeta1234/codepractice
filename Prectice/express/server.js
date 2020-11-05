const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/route')

const corsOptions = {
    origin:'http://localhost:4200',
    credentials:false

}
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.send("get data")
})
app.use("/api",router)
const PORT = process.env.PORT || 3000
app.listen(PORT,function(){
    console.log(`Server startred on ${PORT}`)
})