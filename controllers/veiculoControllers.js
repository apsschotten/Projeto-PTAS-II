
const path = require("path");

const { PrismaClient } = require("@prisma/client");
const client = new PrismaClient();

class veiculoController {

    static formCadastro(req, res) {
        res.sendfile(path.join(__dirname, "../", "views", "formVeiculo.html"));
    }

    static async cadastrar(req, res) {

        const {modelo, placa, ano, cor} = req.body;

       const veiculo = await client.veiculo.create({data:{
            modelo,
            placa,
            ano,
            cor
        }});
         
        res.send(veiculo.id);

    }

    static buscarTodos(req, res) {

    }
}

module.exports = veiculoController