const path = require("path");
const bcryptjs = require("bcryptjs");

const { PrismaClient } = require("@prisma/client");
const client = new PrismaClient();

class usuarioController {
    static async cadastrar(req, res) {

        const { nome, email, senha } = req.body;

        const salt = bcryptjs.genSaltSync(8);
        const hashSenha = bcryptjs.hashSync(senha, salt);

        const usuario = await client.veiculo.create({
            data: {
                nome,
                email,
                senha: hashSenha,
            },
        });

        res.json({
            usuarioId: usuario.id,
        });

    }
}

module.exports = usuarioController