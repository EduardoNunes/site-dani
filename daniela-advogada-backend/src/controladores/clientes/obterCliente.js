const pool = require("../../conexao");

const obterCliente = async (req, res) => {
    const id = req.params.id;

  try {
    const resultado = await pool.query("select * from usuarios where id = $1", [
      id,
    ]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }

    return res.status(200).json(resultado.rows);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = obterCliente;
