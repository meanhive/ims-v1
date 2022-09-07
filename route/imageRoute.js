const route = require('express').Router();
const imageCtrl = require('../controller/imageCtrl');

route.post(`/logo/upload`, imageCtrl.uploadLogoImg)
route.post(`/logo/destroy`, imageCtrl.deleteLogoImg);

route.post(`/profile/upload`, imageCtrl.uploadProfileImg)
route.post(`/profile/destroy`, imageCtrl.deleteProfileImg);

route.post(`/sign/upload`, imageCtrl.uploadSign)
route.post(`/sign/destroy`, imageCtrl.deleteSign);

module.exports = route