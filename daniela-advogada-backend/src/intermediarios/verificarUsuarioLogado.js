const jwt = require("jsonwebtoken");
const senhaJwt = require("../senhaJwt");
const pool = require("../conexao");

const verificarUsuarioLogado = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ mensagem: "Não autenticado1." });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id, cadastro } = jwt.verify(token, senhaJwt);

    const { rows, rowCount } = await pool.query(
      "select * from usuarios where id = $1",
      [id]
    );

    if (rowCount < 1) {
      return res.status(401).json({ mensagem: "Usuário não autorizado." });
    }

    if (rows[0].cadastro !== cadastro) {
      return res.status(401).json({ mensagem: "Cadastro não autorizado." });
    }

    req.usuario = rows[0];

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ mensagem: "Não autorizado." });
  }
};

module.exports = verificarUsuarioLogado;
