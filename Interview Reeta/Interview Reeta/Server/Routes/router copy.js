var express = require('express')
var router = express.Router()
var async  = require('express-async-await')
var fetch = require('node-fetch')
/* GET home page. */
router.get('/', async function(req, res, next) {
    function oIfoundData(){
    return fetch('https://hn.algolia.com/api/v1/items/1')
    }
    const ooIprocessData = async () => {
    const github = await oIfoundData()
    var ooiResponseData = await github.json()
    console.log(ooiResponseData)
    res.send(ooiResponseData)
    }
    ooIprocessData()

})

module.exports = router