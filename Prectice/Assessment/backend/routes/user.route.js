const express = require('express')
const router = express.Router()
const controller = require('../controllers/users.controller')

router.get("/users",controller.getAll);
router.get("/users/:userId",controller.getByID);
router.post('/users/register',controller.create)
router.post('/users/authenticate',controller.getByUserName)
router.delete('/users/:userId',controller.deleteUser)


module.exports = router