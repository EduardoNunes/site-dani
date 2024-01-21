const pool = require("../conexao");
const jwt = require("jsonwebtoken");
const senhaJwt = require("../senhaJwt");

const listarProcessos = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ mensagem: "Não autorizado." });
  }
  const token = authorization.split(" ")[1];

  try {
    const tokenCliente = jwt.verify(token, senhaJwt);

    const resultado = await pool.query("select * from processos");

    return res.json(resultado.rows);
  } catch (error) {
    console.log(error.mensage);
  }
};

module.exports = {
  listarProcessos,
};
