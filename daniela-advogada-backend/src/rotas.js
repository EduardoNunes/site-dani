const express = require("express");
const clientes = require("./controladores/clientes");
const processosEscritorio = require("./controladores/processosEscritorio");
const processosClientes = require("./controladores/processosClientes");
const login = require("./controladores/login");
const verificarUsuarioLogado = require("./intermediarios/autenticacao");

const rotas = express();


rotas.post("/login", login.login);
rotas.post("/clientes", clientes.cadastrarCliente);

rotas.use(verificarUsuarioLogado)

rotas.get("/clientesEscritorio", clientes.listarClientes);
rotas.get("/clientesEscritorio/:id", clientes.obterCliente);
rotas.put("/clientesEscritorio/:id", clientes.atualizarCliente);
rotas.delete("/clientesEscritorio/:id", clientes.deletarCliente);

rotas.get("/processosEscritorio", processosEscritorio.listarProcessos);
rotas.get("/processosEscritorio/:id", processosEscritorio.obterProcesso);
rotas.post("/processosEscritorio", processosEscritorio.cadastrarProcesso);
rotas.put("/processosEscritorio/:id", processosEscritorio.atualizarProcesso);
rotas.delete("/processosEscritorio/:id", processosEscritorio.deletarProcesso);

rotas.get("/processosClientes", processosClientes.listarProcessos);

module.exports = rotas;
