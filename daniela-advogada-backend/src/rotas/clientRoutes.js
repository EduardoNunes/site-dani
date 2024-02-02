const express = require("express");
const verificarUsuarioLogado = require("../intermediarios/verificarUsuarioLogado");
const {
  listarProcessos,
} = require("../controladores/clientes/listarProcessoCliente");

const obterCliente = require("../controladores/clientes/obterCliente");
const atualizarUsuario = require("../controladores/usuarios/atualizarUsuario");
const listarClientes = require("../controladores/clientes/listarClientes");


const rotas = express();

rotas.get("/obterCliente/:id", obterCliente);

rotas.use(verificarUsuarioLogado);

rotas.get("/processosClientes", listarProcessos);
rotas.get("/listarClientes", listarClientes)

module.exports = rotas;
