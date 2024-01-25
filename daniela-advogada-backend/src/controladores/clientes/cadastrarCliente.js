const pool = require("../../conexao");
const bcrypt = require("bcrypt");


const cadastrarCliente = async (req, res) => {
  const { nome, email, senha, tipoCadastro } = req.body;
  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    await pool.query(
      "insert into usuarios (nome, email, senha, cadastro) values ($1, $2, $3, $4) returning *",
      [nome, email, senhaCriptografada, tipoCadastro]
    );

    const resultado = await pool.query("select * from usuarios");

    return res.status(201).json(resultado.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = cadastrarCliente;
