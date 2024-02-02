const pool = require("../../conexao");

const listarClientes = async (req, res) => {
  try {
    const resultado = await pool.query("select * from usuarios where cadastro = 'cliente'");

    return res.json(resultado.rows);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = listarClientes