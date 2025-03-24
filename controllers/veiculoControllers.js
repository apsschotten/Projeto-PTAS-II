const path = require("path");

class veiculoController {

    static formCadastro(req, res) {
        res.sendfile(path.join(__dirname, "../", "views", "formVeiculo.html"));
    }

    static cadastrar(req, res) {
        res.send(JSON.stringify(req.body));
    }

    static buscarTodos(req, res) {

    }
}

module.exports = veiculoController