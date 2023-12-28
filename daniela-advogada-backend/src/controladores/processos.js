let { processos, identificarProcesso } = require("../dadosProcessos");

const listarProcessos = (req, res) => {
  return res.status(200).json(processos);
};

const obterProcesso = (req, res) => {
  const { id } = req.params;

  const processo = processos.find((processo) => {
    return processo.id === Number(id);
  });

  if (!processo) {
    return res.status(404).json({ mensagem: "processo não encontrado" });
  }

  return res.status(200).json(processo);
};

const cadastrarProcesso = (req, res) => {
  const { titulo, vara } = req.body;

  const processo = {
    id: identificadorProcesso++,
    titulo,
    vara,
  };

  processos.push(processo);

  return res.status(201).json(processos);
};

const atualizarProcesso = (req, res) => {
  const { id } = req.params;
  const { titulo, vara } = req.body;

  const processo = processos.find((processo) => {
    return processo.id === Number(id);
  });

  if (!processo) {
    return res.status(404).json({ mensagem: "processo não encontrado" });
  }

  processo.titulo = titulo;
  processo.vara = vara;

  return res.status(201).json(processos);
};

const deletarProcesso = (req, res) => {
  const { id } = req.params;

  const processo = processos.find((processo) => {
    return processo.id === Number(id);
  });

  if (!processo) {
    return res.status(404).json({ mensagem: "O processo não existe" });
  }

  processos = processos.filter((processo) => {
    return processo.id !== Number(id);
  });

  return res.status(201).json(processos);
};

module.exports = {
  listarProcessos,
  obterProcesso,
  cadastrarProcesso,
  atualizarProcesso,
  deletarProcesso,
};
