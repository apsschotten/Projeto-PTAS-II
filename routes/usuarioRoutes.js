const router = require("express").Router();

const usuarioController = require('../controllers/usuarioControllers');

router.post("/cadastro", usuarioController.cadastrar);

router.post("/login", usuarioController.login);

module.exports = router;