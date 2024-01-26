const pool = require("../../conexao");
const bcrypt = require("bcrypt");

const atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = await pool.query("select * from usuarios where id = $1", [
      id,
    ]);

    await pool.query(
      "update usuarios set nome = $1, email = $2, senha = $3 where id = $4",
      [nome, email, senhaCriptografada, id]
    );

    const resultado = await pool.query("select * from usuarios where id = $1", [
      id,
    ]);

    return res.status(200).json(resultado.rows);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = atualizarUsuario;
