const pool = require("../conexao");
const jwt = require("jsonwebtoken");
const senhaJwt = require("../senhaJwt");

const listarProcessos = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ mensagem: "Não autorizado." });
  }

  try {
    const tokenCliente = jwt.verify(token, senhaJwt);

    console.log(tokenCliente);

    const resultado = await pool.query("select * from processos");

    return res.json(resultado.rows);
  } catch (error) {
    console.log(error.mensage);
  }
};

module.exports = {
  listarProcessos,
};
