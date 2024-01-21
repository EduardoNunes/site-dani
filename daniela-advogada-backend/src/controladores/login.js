const pool = require("../conexao");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, senha, tipoCadastro } = req.body;

  try {
    const usuario = await pool.query(
      "select * from usuarios where email = $1",
      [email]
    );

    if (usuario.rowCount < 1) {
      return res.status(404).json({ mensagem: "Email ou senha inválida" });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha);

    if (!senhaValida) {
      return res.status(400).json({ mensagem: "Email ou senha inválida" });
    }

    if (usuario.rows[0].cadastro !== tipoCadastro) {
        return res.status(400).json({ mensagem: `Usuário não encontrado na categoria ${tipoCadastro}`})
    }

    return res.json({ mensagem: "Usuário autenticado." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = {
  login,
};
