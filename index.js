const express = require('express');

const app = express()

//capturar campos enviados para o server pelo POST
app.use(express.urlencoded ({ extends: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello world");
});


const veiculoRoutes = require("./routes/veiculoRoutes")
app.use("/veiculos", veiculoRoutes)

app.listen(5000, (err) => {
    console.log("aplicação rodando na porta 5000");
});
