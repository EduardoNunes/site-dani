const express = require("express");
const rotas = require("./rotas");
const validaSenha = require("./intermediarios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(validaSenha);

app.use(rotas);

app.listen(3001);
