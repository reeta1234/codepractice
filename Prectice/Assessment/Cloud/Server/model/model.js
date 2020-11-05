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

module.exports = user