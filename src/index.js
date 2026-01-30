require('dotenv').config();
const express = require("express");
const port = 3000;

const server = express();


server.get("/", (req, res) => {
    res.send("Servidor funcionando!");
});

server.listen(process.env.PORT || 3000, (error) => {
    if (error) {
        return console.log(`Erro ao se conectar com servidor: ${error}`);
    }
    return console.log(`Conexão com servidor estabelecida com sucesso na porta ${port}`);
});



