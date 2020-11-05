const { resolve } = require('path')
const db = require('../config/db')

const user = function(user){
    this.FirstName = user.FirstName
    this.LastName = user.LastName
    this.Profile = user.Profile
}

user.getAll = function(result){
    db.query("Select * from users",function(err,data){
        if(err)
        return result(err,null)
        else
        return result(null,data)
    })
}

user.createUser = function(userdata,result){
    db.query("Insert INTO users set?",userdata,function(err,data){
        if(err)
        return result(err,null)
        else
        return result(null,data)
    })
}

user.updateUser = function(userId,updateData){
    //console.log("Update users Set? Where userId=?",(updateData,userId))
    return new Promise((resolve,reject)=>{
        db.query("Select * from users",function(error,data){
            if(error){
                return reject(error)
            }else{
                return resolve(data)
            }
        })
    })

    //console.log(userId,userData)
    // db.query("Update users set? where UserId=?",(userData,userId),function(error,data){
    //     if(error){
    //         return result(error,null)
    //     }else{
    //         return result(null,data)
    //     }
    // })
}


module.exports = user