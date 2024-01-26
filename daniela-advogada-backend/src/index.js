const express = require("express");
const clientRoutes = require("./rotas/clientRoutes");
const officeRoutes = require("./rotas/officeRoutes");
const usuarioRoutes = require("./rotas/usuarioRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(usuarioRoutes);
app.use(clientRoutes);
app.use(officeRoutes);

app.listen(3001);
