const sql = require('../config/db')

exports.city = function(city){
    this.Name = city.Name;
    this.CountryCode = city.CountryCode
    this.District = city.District
    this.Population = city.Population
}

exports.getAll = function(result){
    sql.query("select * from city limit 10",function(error,data){
        if(error){
            return result(error,null)
        }
        return result(null,data)
    })
}

exports.getById=function(cityId,result){
    sql.query(`select * from city where ID=${cityId}`,cityId,function(error,data){
        if(error){
            result(error,null)
        }
        result(null,data)
    })
}

exports.create = function(payload,result){
    sql.query("INSERT INTO city SET?",payload,function(error,data){
        if(error){
            result(error,null)
        }
        result(null,data)
    })
}
