const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'world'
})

conn.connect(function(error){
    if(error) throw error;
    console.log('database connected')
})

module.exports = conn