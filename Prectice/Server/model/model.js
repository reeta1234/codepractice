const sql = require('../config/db')

const user = function(user){
    this.FirstName = user.FirstName
    this.LastName = user.LastName
    this.UserName = user.UserName
    this.Password = user.Password
    this.Email = user.Email
    this.Gender = user.Gender
    this.Country = user.Country
}

user.getAll = function(result){
    return new Promise((resolve,reject)=>{
        sql.query("Select * from users",function(err,data){
            if(err)
                return reject(result(err,null))
            else
                return resolve(result(null,data))
        })
    })
}
user.getById=function(userId,result){
    sql.query("Select * from users where ID=?",userId,function(error,data){
        if(error){
            return result(error,null)
        }else{
            return result(null,data)
        }
    })
}
user.createUser = function(newUser,result){
    sql.query("insert into users set?",newUser,function(error,data){
        if(error){
            return result(error,null)
        }else{
            return result(null,data)
        }
    })
}
user.updateUser = function(userId,updateuser,result){
    sql.query("Update users set?",updateuser,userId,function(error,data){
        if(error){
            return result(error,null)
        }else{
            return result(null,data)
        }
    })
}
user.deleteUser=function(userId,result){
    sql.query("Delete from users where ID=?",userId,function(error,data){
        if(error){
            return result(error,null)
        }else{
            return result(null,data)
        }
    })
}

user.deleteAll=function(result){
    sql.query("Delete from users",function(error,data){
        if(error){
            result(error,null)
        }else{
            result(null,data)
        }
    })
}
module.exports = user