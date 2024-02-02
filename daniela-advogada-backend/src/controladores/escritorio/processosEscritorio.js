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

module.exports = {
  obterProcesso,
};
