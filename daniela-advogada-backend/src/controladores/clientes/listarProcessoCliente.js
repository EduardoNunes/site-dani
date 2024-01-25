const pool = require("../../conexao");

const listarProcessos = async (req, res) => {
  const usuarioId = req.usuario.id;

  try {
    const resultado = await pool.query(
      "select * from processos where usuarios_id = $1",
      [usuarioId]
    );

    return res.json(resultado.rows);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listarProcessos,
};
