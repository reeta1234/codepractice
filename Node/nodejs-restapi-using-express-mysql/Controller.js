var connection = require('./db')
exports.list = function (req, res) {
    connection.query('select * from customers', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 }