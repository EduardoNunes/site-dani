const express = require("express");
const autenticarLoginUsuario = require("../intermediarios/autenticarLoginUsuario");
const { login } = require("../controladores/usuarios/login");
const loginUsuarioSchema = require("../schemas/loginUsuarioSchema");
const autenticarCadastrarUsuario = require("../intermediarios/autenticarCadastroUsuario");
const cadastroUsuarioSchema = require("../schemas/cadastroUsuarioSchema");
const cadastrarUsuario = require("../controladores/clientes/cadastrarCliente");

const rotas = express();

rotas.post(
  "/usuario",
  autenticarCadastrarUsuario(cadastroUsuarioSchema),
  cadastrarUsuario
);

rotas.post("/login", autenticarLoginUsuario(loginUsuarioSchema), login);

module.exports = rotas;
