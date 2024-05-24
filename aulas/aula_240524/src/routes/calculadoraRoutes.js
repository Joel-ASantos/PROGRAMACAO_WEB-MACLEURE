const express = require('require')
const router = express.Router()
const calcController = require('../controller/calculadoraController')

router.get('/',calcController.index)
router.post('/resultado',calcController.resultado)

module.exports = router