const pool = require("../../conexao");

const obterProcesso = async (req, res) => {
  const { id } = req.params;

  try {
    const processo = await pool.query("select * from processos where id = $1", [
      id,
    ]);

    if (processo.rows.length === 0) {
      return res.status(404).json({ mensagem: "processo não encontrado" });
    }

    return res.status(200).json(processo.rows);
  } catch (error) {
    console.log(error);
  }
};

const cadastrarProcesso = async (req, res) => {
  const {
    autor,
    reu,
    numeroProcesso,
    vara,
    juiz,
    comarca,
    dataEntrada,
    atualizado,
    info,
    usuarios_id,
  } = req.body;

  try {
    if (!usuarios_id) {
      return res
        .status(400)
        .json({ mensagem: "O campo usuario_id é obrigatório" });
    }

    const usuarioExistente = await pool.query(
      "SELECT id FROM usuarios WHERE id = $1",
      [usuarios_id]
    );

    if (usuarioExistente.rows.length === 0) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    await pool.query(
      "insert into processos (autor, reu, numero, vara, juiz, comarca, data_entrada, atualizado, infos, usuarios_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
      [
        autor,
        reu,
        numeroProcesso,
        vara,
        juiz,
        comarca,
        dataEntrada,
        atualizado,
        info,
        usuarios_id,
      ]
    );

    return res.status(201).json({ mensagem: "Processo cadastrado" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const atualizarProcesso = async (req, res) => {
  const { id } = req.params;
  const {
    autor,
    reu,
    numeroProcesso,
    vara,
    juiz,
    comarca,
    dataEntrada,
    atualizado,
    info,
  } = req.body;

  try {
    const processo = await pool.query("select * from processos where id = $1", [
      id,
    ]);

    if (processo.rows.length === 0) {
      return res.status(404).json({ mensagem: "processo não encontrado" });
    }

    await pool.query(
      "update processos set autor = $1, reu = $2, numero = $3, vara = $4, juiz = $5, comarca = $6, data_entrada =  $7, atualizado = $8, infos = $9 where id = $10",
      [
        autor,
        reu,
        numeroProcesso,
        vara,
        juiz,
        comarca,
        dataEntrada,
        atualizado,
        info,
        id,
      ]
    );

    const resultado = await pool.query(
      "select * from processos where id = $1",
      [id]
    );

    return res.status(201).json(resultado.rows);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const deletarProcesso = async (req, res) => {
  const { id } = req.params;

  try {
    const processo = await pool.query("select * from processos where id = $1", [
      id,
    ]);

    if (processo.rows.length === 0) {
      return res.status(404).json({ mensagem: "O processo não existe" });
    }

    processos = await pool.query("delete from processos where id = $1", [id]);

    return res.status(201).json({ mensagem: "Processo excluído" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = {
  obterProcesso,
  cadastrarProcesso,
  atualizarProcesso,
  deletarProcesso,
};
