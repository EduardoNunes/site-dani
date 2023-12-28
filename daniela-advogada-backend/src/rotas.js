const express = require("express");
const clientes = require("./controladores/clientes");
const processos = require("./controladores/processos");

const rotas = express();

rotas.get("clientes");

rotas.get("/clientes", clientes.listarClientes);
rotas.get("/clientes/:id", clientes.obterCliente);
rotas.post("/clientes", clientes.cadastrarCliente);
rotas.put("/clientes/:id", clientes.atualizarCliente);
rotas.delete("/clientes/:id", clientes.deletarCliente);

rotas.get("/processos", processos.listarProcessos);
rotas.get("/processos/:id", processos.obterProcesso);
rotas.post("/processos", processos.cadastrarProcesso);
rotas.put("/processos/:id", processos.atualizarProcesso);
rotas.delete("/processos/:id", processos.deletarProcesso);

module.exports = rotas;
