const route = require('express').Router()
const authController = require('../controller/authController')
const authMiddleware = require('../middleware/auth')

route.post(`/register`, authController.register)
route.post(`/login`, authController.login)
route.get(`/logout`, authController.logout)
route.get(`/refreshToken`, authController.refreshToken)
route.get(`/userinfo`, authMiddleware, authController.getUserInfo)

route.patch(`/resetPassword`, authController.resetPassword)



module.exports = route