const sql = require('../config/db.config')

const user = function(user){
    this.FirstName = user.FirstName
    this.LastName = user.LastName
    this.Profile = user.Profile
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
    let query = "Select * from users where UserId=?";
    sql.query(query,userId,function(error,data){
        if(error){
            return result(error,null)
        }else{
            return result(null,data)
        }
    })
}

user.getByName=function(userName,result){
    sql.query("Select * from users where FirstName=? OR LastName=?",[userName,userName],function(error,data){
        if(error){
            return result(error,null)
        }else{
            return result(null,data)
        }
    })
}

// user.getByUserName=function({UserName,Password},result){
//     sql.query(`select * from users where UserName='${UserName}' AND Password='${Password}'`,[UserName,Password],function(error,data){
//         if(error){
//             return result(error,null)
//         }
//         return result(null,data)
//     })
// }

user.createUser = function(newUser,result){
    console.log(newUser)
    sql.query("insert into users set?",newUser,function(error,data){
        if(error){
            return result(error,null)
        }else{
            return result(null,data)
        }
    })
}
user.updateUser = function(userId,updateuser,result){
    sql.query("Update users set? WHERE UserID=?",[updateuser,userId],function(error,data){
        if(error){
            return result(error,null)
        }else{
            return result(null,data)
        }
    })
}
user.deleteUser=function(userId,result){
    sql.query("Delete from users where UserId=?",userId,function(error,data){
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