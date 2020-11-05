const { response } = require('express')
const express = require('express')
const router = express.Router()
const controlletr = require('../controller/controller')

router.get("/user/me",controlletr.getAll)
router.post("/user/search",controlletr.searchUser)
router.post("/user/detail",controlletr.userDetail)

module.exports = router