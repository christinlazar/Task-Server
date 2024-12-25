const express = require('express')
const userController = require('../controller/userController')
const userRoute = express.Router()

userRoute.post('/register',userController.userRegister)
userRoute.post('/add-task',userController.addTask)

module.exports = userRoute