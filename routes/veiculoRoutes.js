const router = require("express").Router();

const veiculoController = require("../controllers/veiculoController");

router.get("/cadastro", veiculoController.formCadastro);

router.post("/cadastro", veiculoController.Cadastrar);

router.get("/todos", veiculoController.bucarTodos);

module.exports = router;