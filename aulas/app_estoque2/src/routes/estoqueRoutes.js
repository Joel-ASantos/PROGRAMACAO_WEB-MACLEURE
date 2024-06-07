const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');

router.get('/',estoqueController.indexView);
router.get('/criar_conta',estoqueController.criarContaView);
router.post('/cadastrar_usuario',estoqueController.cadastrar_usuario);
module.exports = router;