const sql = require('../config/db.config')

const users = function(user){
    this.FirstName = user.FirstName;
    this.LastName = user.LastName
    this.UserName = user.UserName
    this.Password = user.Password
    this.Email = user.Email;
    this.Gender = user.Gender
    this.Country = user.Country
}

users.getAll = function(result){
    sql.query("select * from users limit 10",function(error,data){
        if(error){
            return result(error,null)
        }
        return result(null,data)
    })
}

users.getById=function(userId,result){
    sql.query(`select * from users where ID=${userId}`,userId,function(error,data){
        if(error){
            return result(error,null)
        }
        return result(null,data)
    })
}

users.getByUserName=function({UserName,Password},result){
    sql.query(`select * from users where UserName='${UserName}' AND Password='${Password}'`,[UserName,Password],function(error,data){
        if(error){
            return result(error,null)
        }
        return result(null,data)
    })
}

users.create = function(payload,result){
    sql.query("INSERT INTO users SET?",payload,function(error,data){
        if(error){
            return result(error,null)
        }
        return result(null,data)
    })
}

users.delete=function(userId,res){
    sql.query("DELETE FROM users WHERE ID = ?",userId,function(err,row){
        if(err){
            console.log("error: ", err);
            res(err, null);
            return;
        }
        res(null,row)
    })
}

module.exports = users;