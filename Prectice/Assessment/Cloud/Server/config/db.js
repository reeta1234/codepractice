const mysql = require('mysql')

const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:''
})

connect.connect(function(err){
    if(err) throw err
    console.log("Database conneted")
})

module.exports = connect