const user = require('../model/model')
const jwt = require('jsonwebtoken')
const fetch = require('node-fetch');

exports.getAll = function(req,res){
    const url ='https://api.github.com/user';
    const headers = {
      "Authorization": `token ${req.header('token')}`
    }
    fetch(url, {headers:headers})
      .then((res) => {
        return res.json()
    })
    .then((json) => {
      res.send(json)
    });
}

exports.searchUser = function(req,res){
    let srchParm=''
    if(req.body.q){
        srchParm = req.body.q
    }
    const url =`https://api.github.com/search/users?q=${srchParm}`;
    const headers = {
      "Authorization": `token ${req.header('token')}`
    }
    fetch(url, {headers:headers})
      .then((res) => {
        return res.json()
    })
    .then((json) => {
      res.send(json)
    });
}

exports.userDetail = function(req,res){
    let srchParm=''
    if(req.body.q){
        srchParm = req.body.q
    }
    const url =`https://api.github.com/users/${srchParm}`;
    const headers = {
      "Authorization": `token ${req.header('token')}`
    }
    fetch(url, {headers:headers})
      .then((res) => {
        return res.json()
    })
    .then((json) => {
      res.send(json)
    });
}