const express = require("express");
const cadastrarCliente = require("../controladores/clientes/cadastrarCliente");
const verificarUsuarioLogado = require("../intermediarios/verificarUsuarioLogado");
const {
  listarProcessos,
} = require("../controladores/clientes/listarProcessoCliente");
const autenticarCadastrarCliente = require("../intermediarios/autenticarCadastroCliente");
const cadastroUsuarioSchema = require("../schemas/cadastroUsuarioSchema");
const obterCliente = require("../controladores/clientes/obterCliente");

const rotas = express();

rotas.post(
  "/clientes",
  autenticarCadastrarCliente(cadastroUsuarioSchema),
  cadastrarCliente
);

rotas.use(verificarUsuarioLogado);

rotas.get("/obterCliente/:id", obterCliente);

rotas.get("/processosClientes", listarProcessos);

module.exports = rotas;
