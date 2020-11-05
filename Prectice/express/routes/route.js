const express = require('express')
const router = express.Router()
const controller = require('../controller/controlle')

router.get("/city",controller.getAll);
router.get("/city/:cityId",controller.getByID);
router.post('/city',controller.create)


module.exports = router