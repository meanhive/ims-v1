const route = require('express').Router()
const authController = require('../controller/authController')
const adminAuth = require('../middleware/AdminAuth')
const authMiddleware = require('../middleware/auth')

route.post(`/register`, authController.register)
route.post(`/login`, authController.login)
route.get(`/logout`, authController.logout)
route.get(`/refreshToken`, authController.refreshToken)
route.get(`/userinfo`, authMiddleware, authController.getUserInfo)

route.patch(`/resetPassword`, authController.resetPassword)
route.patch(`/updateProfile`, authMiddleware, authController.updateProfile)

/* admin authorization */
route.patch(`/changeRole/:id`, authMiddleware, adminAuth, authController.updateProfile)



module.exports = route