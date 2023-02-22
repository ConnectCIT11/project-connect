const express = require("express");
const routes = express.Router();

const ProdutoController = require("./app/controller/ProdutoController");
const ClienteController = require("./app/controller/ClienteController");

routes.get("/products", ProdutoController.index);
routes.post("/product", ProdutoController.store);

routes.post("/login", ClienteController.login);
routes.get("/info", ClienteController.getInfo);
routes.post("/addcliente", ClienteController.store)

module.exports = routes;