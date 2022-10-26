const SettingController = require('../controller/SettingsController')
const settingRoute = require('express').Router();

settingRoute.get(`/`, SettingController.getAll)
settingRoute.get(`/:id`, SettingController.getSingle)
settingRoute.post(`/`, SettingController.create)
settingRoute.patch(`/:id`, SettingController.update)
settingRoute.delete(`/:id`, SettingController.delete)


module.exports = settingRoute
