const pool = require("../../conexao");

const atualizarCliente = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, tipoCadastro } = req.body;

  try {
    const usuarios = await pool.query("select * from usuarios where id = $1", [
      id,
    ]);

    if (usuarios.rows.length === 0) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    await pool.query(
      "update usuarios set nome = $1, email = $2, senha = $3, cadastro = $4 where id = $5",
      [nome, email, senha, tipoCadastro, id]
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

const deletarCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarios = await pool.query("select * from usuarios where id = $1", [
      id,
    ]);

    if (usuarios.rows.lenght === 0) {
      return res.status(404).json({ mensagem: "Este usuário não existe" });
    }

    await pool.query("delete from usuarios where id = $1", [id]);

    return res.status(200).json({ mensagem: "Usuário deletado" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = {
  deletarCliente,
};
