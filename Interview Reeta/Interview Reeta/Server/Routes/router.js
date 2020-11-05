const express = require('express')
const router = express.Router()
const search = require('../controller/search.controller')

router.get("/search",search.getAll)

module.exports = router