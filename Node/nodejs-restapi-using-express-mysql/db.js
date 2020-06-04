var express = require('express')
var mysql = require('mysql')

//start mysql connection
var connection = mysql.createConnection({
    host     : 'localhost', //mysql database host name
    user     : 'root', //mysql database user name
    password : '123456', //mysql database password
    database : 'classicmodels' //mysql database name
  });
  
  connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
  })
  //end mysql connection

  module.exports connection