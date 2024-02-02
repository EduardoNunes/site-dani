const express = require("express");
const verificarUsuarioLogado = require("../intermediarios/verificarUsuarioLogado");
const {
  listarProcessos,
} = require("../controladores/escritorio/listarProcessosEscritório");
const deletarProcesso = require("../controladores/escritorio/deletarProcessoEscritorio");
const editarProcesso = require("../controladores/escritorio/editarProcessoEscritorio");
const editarProcessoSchema = require("../schemas/editarProcessoSchema");
const autenticarEditarProcesso = require("../intermediarios/autenticarEditarProcesso");
const cadastrarProcesso = require("../controladores/escritorio/cadastrarProcessoEscritorio");
const cadastrarProcessoSchema = require("../schemas/cadastrarProcessoSchema");
const autenticarCadastroProcesso = require("../intermediarios/autenticarCadastroProcesso");

const rotas = express();

rotas.use(verificarUsuarioLogado);

rotas.get("/processosEscritorio", listarProcessos);
rotas.delete("/deletarProcesso/:id", deletarProcesso);
rotas.put("/editarProcessoEscritorio/:id", autenticarEditarProcesso(editarProcessoSchema), editarProcesso )
rotas.post("/cadastrarProcesso", autenticarCadastroProcesso(cadastrarProcessoSchema), cadastrarProcesso)

module.exports = rotas;
