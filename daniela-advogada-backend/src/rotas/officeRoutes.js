const express = require("express");
const verificarUsuarioLogado = require("../intermediarios/verificarUsuarioLogado");
const {
  listarProcessos,
} = require("../controladores/escritorio/listarProcessosEscritório");

const rotas = express();

rotas.use(verificarUsuarioLogado);

rotas.get("/processosEscritorio", listarProcessos);

module.exports = rotas;
