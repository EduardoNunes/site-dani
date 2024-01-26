const pool = require("../../conexao");

const editarProcesso = async (req, res) => {
  const { id } = req.params;
  const {
    autor,
    reu,
    numero,
    vara,
    juiz,
    comarca,
    data_entrada,
    atualizado,
    infos,
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
        numero,
        vara,
        juiz,
        comarca,
        data_entrada,
        atualizado,
        infos,
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

module.exports = editarProcesso;
