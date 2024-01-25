const express = require("express");
const verificarUsuarioLogado = require("../intermediarios/verificarUsuarioLogado");
const {
  listarProcessos,
} = require("../controladores/clientes/listarProcessoCliente");

const obterCliente = require("../controladores/clientes/obterCliente");
const atualizarUsuario = require("../controladores/usuarios/atualizarUsuario");
const autenticarEditarUsuario = require("../intermediarios/autenticarEditarUsuario");
const editarUsuarioSchema = require("../schemas/editarClienteSchema");

const rotas = express();

rotas.use(verificarUsuarioLogado);

rotas.get("/obterCliente/:id", obterCliente);
rotas.put(
  "/atualizarUsuario/:id",
  autenticarEditarUsuario(editarUsuarioSchema),
  atualizarUsuario
);

rotas.get("/processosClientes", listarProcessos);

module.exports = rotas;
