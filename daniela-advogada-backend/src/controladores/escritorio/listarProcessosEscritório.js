const pool = require("../../conexao");

const listarProcessos = async (req, res) => {
  try {
    const resultado = await pool.query("select * from processos");

    return res.json(resultado.rows);
  } catch (error) {
    console.log(error.mensage);
  }
};

module.exports = { listarProcessos };
