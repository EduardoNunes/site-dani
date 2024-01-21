const express = require("express");
const clientes = require("./controladores/clientes");
const processosEscritorio = require("./controladores/processosEscritorio");
const processosClientes = require("./controladores/processosClientes")
const login = require("./controladores/login");

const rotas = express();

rotas.post("/login", login.login);

rotas.post("/clientes", clientes.cadastrarCliente);
rotas.get("/clientes", clientes.listarClientes);
rotas.get("/clientes/:id", clientes.obterCliente);
rotas.put("/clientes/:id", clientes.atualizarCliente);
rotas.delete("/clientes/:id", clientes.deletarCliente);

rotas.get("/processosEscritorio", processosEscritorio.listarProcessos);
rotas.get("/processosEscritorio/:id", processosEscritorio.obterProcesso);
rotas.post("/processosEscritorio", processosEscritorio.cadastrarProcesso);
rotas.put("/processosEscritorio/:id", processosEscritorio.atualizarProcesso);
rotas.delete("/processosEscritorio/:id", processosEscritorio.deletarProcesso);

rotas.get("/processosClientes", processosClientes.listarProcessos);

module.exports = rotas;
