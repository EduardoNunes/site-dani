const express = require("express");
const otherRoutes = require("./rotas/otherRoutes");
const clientRoutes = require("./rotas/clientRoutes");
const officeRoutes = require("./rotas/officeRoutes");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(otherRoutes);
app.use(clientRoutes);
app.use(officeRoutes);

app.listen(3001);
