const express = require("express");
const clientes = require("./controladores/clientes");
const processos = require("./controladores/processos");
const login = require("./controladores/login");

const rotas = express();

rotas.post("/login", login.login);

rotas.post("/clientes", clientes.cadastrarCliente);
rotas.get("/clientes", clientes.listarClientes);
rotas.get("/clientes/:id", clientes.obterCliente);
rotas.put("/clientes/:id", clientes.atualizarCliente);
rotas.delete("/clientes/:id", clientes.deletarCliente);

rotas.get("/processos", processos.listarProcessos);
rotas.get("/processos/:id", processos.obterProcesso);
rotas.post("/processos", processos.cadastrarProcesso);
rotas.put("/processos/:id", processos.atualizarProcesso);
rotas.delete("/processos/:id", processos.deletarProcesso);

module.exports = rotas;
