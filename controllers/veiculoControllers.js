class veiculoController{

    static formCadastro(req, res){
        res.sendfile(path.join(__dirname, "../", "views", "formVeiculo.html"));
    }

    static Cadastrar(req, res){

    }

    static bucarTodos(req, res){

    }
}

module.exports = veiculoController