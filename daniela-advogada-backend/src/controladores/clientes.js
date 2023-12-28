let { clientes, identificarCliente } = require("../dadosClientes");

const listarClientes = (req, res) => {
  return res.status(200).json(clientes);
};

const obterCliente = (req, res) => {
  const { id } = req.params;

  const cliente = clientes.find((cliente) => {
    return cliente.id === Number(id);
  });

  if (!cliente) {
    return res.status(404).json({ mensagem: "Cliente não encontrado" });
  }

  return res.status(200).json(cliente);
};

const cadastrarCliente = (req, res) => {
  const { nome, idade } = req.body;

  const cliente = {
    id: identificadorCliente++,
    nome,
    idade,
  };

  clientes.push(cliente);

  return res.status(201).json(clientes);
};

const atualizarCliente = (req, res) => {
  const { id } = req.params;
  const { nome, idade } = req.body;

  const cliente = clientes.find((cliente) => {
    return cliente.id === Number(id);
  });

  if (!cliente) {
    return res.status(404).json({ mensagem: "Cliente não encontrado" });
  }

  cliente.nome = nome;
  cliente.idade = idade;

  return res.status(201).json(clientes);
};

const deletarCliente = (req, res) => {
  const { id } = req.params;

  const cliente = clientes.find((cliente) => {
    return cliente.id === Number(id);
  });

  if (!cliente) {
    return res.status(404).json({ mensagem: "O cliente não existe" });
  }

  clientes = clientes.filter((cliente) => {
    return cliente.id !== Number(id);
  });

  return res.status(201).json(clientes);
};

module.exports = {
  listarClientes,
  obterCliente,
  cadastrarCliente,
  atualizarCliente,
  deletarCliente,
};
