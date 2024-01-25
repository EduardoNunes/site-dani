const express = require("express");
const login = require("../controladores/login");

const rotas = express();

rotas.post("/login", login.login);

module.exports = rotas;
