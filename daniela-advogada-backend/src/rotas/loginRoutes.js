const express = require("express");
const autenticarLoginUsuario = require("../intermediarios/autenticarLoginUsuario");
const { login } = require("../controladores/usuarios/login");
const loginUsuarioSchema = require("../schemas/loginUsuarioSchema");

const rotas = express();

rotas.post("/login", autenticarLoginUsuario(loginUsuarioSchema), login);

module.exports = rotas;
