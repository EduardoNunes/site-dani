const pool = require("../../conexao");

const deletarProcesso = async (req, res) => {
  const { id } = req.params;
  
  try {
    const processo = await pool.query("select * from processos where id = $1", [
      id,
    ]);

    if (processo.rows.length === 0) {
      return res.status(404).json({ mensagem: "O processo não existe" });
    }

    await pool.query("delete from processos where id = $1", [id]);

    return res.status(201).json({ mensagem: "Processo excluído com sucesso!" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = deletarProcesso;
