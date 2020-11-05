var async  = require('express-async-await')
var fetch = require('node-fetch')


exports.getAll = async function(req, res, next) {
    console.log(req.query)
    function searchNews(){
        let source = req.query.source
        let text = req.query.text ? req.query.text :''
        if(source=='wiki')
            return fetch('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=halodoc&origin=*')
        else
            return fetch('https://hn.algolia.com/api/v1/search?query='+text)
    }
    const getSearchContent = async () => {
        const searchResult = await searchNews()
        var responseData = await searchResult.json()
        //console.log(responseData)
        res.send(responseData)
    }
    getSearchContent()
}
