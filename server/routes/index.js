const Router = require('express')
const router = new Router()
const MainController = require('../controllers/MainController')

router.post('/sendForm', MainController.sendForm)
router.post('/sendCode', MainController.sendCode)
router.post('/sendAgreement', MainController.sendAgreement)
router.post('/checkData', MainController.checkData)


module.exports = router