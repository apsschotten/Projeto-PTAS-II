class veiculoController {

    static formCadastro(req, res) {
        res.sendfile(path.join(__dirname, "../", "views", "formVeiculo.html"));
    }

    static cadastrar(req, res) {

    }

    static buscarTodos(req, res) {

    }
}

module.exports = veiculoController