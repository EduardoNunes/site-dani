const express = require("express");
const verificarUsuarioLogado = require("../intermediarios/verificarUsuarioLogado");
const {
  listarProcessos,
} = require("../controladores/escritorio/listarProcessosEscritorio");
const deletarProcesso = require("../controladores/escritorio/deletarProcessoEscritorio");

const rotas = express();

rotas.use(verificarUsuarioLogado);

rotas.get("/processosEscritorio", listarProcessos);
rotas.delete("/deletarProcesso/:id", deletarProcesso);

module.exports = rotas;
