const express = require('express')
const router = express.Router()
const controller = require('../controllers/users.controller')

router.get("/users",controller.getAll);
router.get("/users/:userId",controller.getByID);
router.get("/users/search/:userName",controller.getByName);
router.post('/users',controller.create)
router.put('/users/:userId',controller.update)
router.delete('/users/:userId',controller.deleteUser)
router.delete('/users/',controller.deleteAll)


module.exports = router