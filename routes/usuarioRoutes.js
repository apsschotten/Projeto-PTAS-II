const router = require("express").Router();

const usuarioController = require('../controllers/usuarioControllers');

router.post("/cadastro", usuarioController.cadastrar);

module.exports = router;