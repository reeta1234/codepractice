//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

var express = require('express');
var router = express.Router();

// Require controller modules.
var controller = require('./Controller');

//rest api to get all customers
router.get('/customer', controller.list);
 //rest api to get a single customer data
 router.get('/customer/:id', function (req, res) {
    connection.query('select * from customers where Id=?', [req.params.id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 
 //rest api to create a new customer record into mysql database
 router.post('/customer', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO customer SET ?', params, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 
 //rest api to update record into mysql database
 router.put('/customer', function (req, res) {
    connection.query('UPDATE `customer` SET `Name`=?,`Address`=?,`Country`=?,`Phone`=? where `Id`=?', [req.body.Name,req.body.Address, req.body.Country, req.body.Phone, req.body.Id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 
 //rest api to delete record from mysql database
 router.delete('/customer', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `customer` WHERE `Id`=?', [req.body.Id], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });

 module.exports = router;