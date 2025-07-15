const express = require('express');

const app = express()

//Capturar campos enviados para o server pelo POST
app.use(express.urlencoded({ extends: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
    res.render("home");
    //res.send("Hello World!");
});

const veiculoRoutes = require("./routes/veiculoRoutes");
app.use("/veiculos", veiculoRoutes);

const usuarioRoutes = require("./routes/usuarioRoutes");
app.use("/usuario", usuarioRoutes);

const usuarioController = require('./controllers/usuarioControllers');

app.get("/areaLogada", usuarioController.verificaAutenticacao, (req, res, next) => {
    res.json({
        msg: 
        "Você está logado com o ID " + req.usuarioId + " e pode acessar este recurso.",
    });
});

app.listen(5000, (err) => {
    console.log("Aplicação rodando na porta 5000...");
});
