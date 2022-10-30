const SettingController = require('../controller/SettingsController')
const settingRoute = require('express').Router();
const authMiddleware = require('../middleware/auth')
const adminAuth = require('../middleware/AdminAuth')


settingRoute.get(`/all`, authMiddleware, adminAuth, SettingController.getAll)
settingRoute.get(`/read/:id`,authMiddleware, adminAuth, SettingController.getSingle)
settingRoute.post(`/create`,authMiddleware, adminAuth, SettingController.create)
settingRoute.patch(`/update/:id`, authMiddleware, adminAuth, SettingController.update)
settingRoute.delete(`/delete/:id`,authMiddleware, adminAuth, SettingController.delete)


module.exports = settingRoute
