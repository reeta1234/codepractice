var sql = require('../config/config')

const customer = function(customer){
    this.name = customer.name
    this.email = customer.email
    this.active = customer.status?customer.status:1
}

customer.getAll = function(res){
    sql.query("Select * from customers",function(err,rows){
        if (err) {
            console.log("error: ", err);
            res(err, null);
            return;
        }
        res(null,rows)
    })
}

customer.findById=function(customerId,res){
    sql.query(`SELECT * FROM customers WHERE id = ${customerId}`,function(err,row){
        if(err){
            console.log("error: ", err);
            res(err, null);
            return;
        }
        res(null,row)
    })
}

module.exports = customer;

customer.create = function(newCustomer,res){
	console.log(newCustomer)
    sql.query("INSERT INTO customers SET?",newCustomer,function(err,rows){
        if (err) {
            console.log("error: ", err);
            res(err, null);
            return;
          }
      
          console.log("created tutorial: ", { id: rows.insertId, ...newCustomer });
          res(null, { id: rows.insertId, ...newCustomer });
    })
}

customer.update = function(customerId,customer,res){
    sql.query(
	"UPDATE customers SET name = ?, email = ?, active = ? WHERE id = ?",
    [customer.name,customer.email,1,customerId],function(err,row){
        if(err){
            res(err,null)
            return
        }
        res(null,{ id: customerId, ...customer })
    })
}

customer.delete=function(customerId,res){
    sql.query("DELETE FROM customers WHERE id = ?",customerId,function(err,row){
        if(err){
            console.log("error: ", err);
            res(err, null);
            return;
        }
        res(null,row)
    })
}

customer.deletAll =function(req,res){
    sql.query("DELETE from customers",function(err,rows){
        if (err) {
            console.log("error: ", err);
            res(null, err);
            return;
          }
      
          console.log(`deleted ${res.affectedRows} tutorials`);
          res(null, res);
    })
}


