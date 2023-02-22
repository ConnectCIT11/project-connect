const Produto = require("../model/Produto");
// const middlewareValidarJWT = require("../../modules/Auth/AuthMiddleware");

class ProdutoController {
  async store(req, res) {
    const data = await Produto.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    // middlewareValidarJWT(req.headers["authorization"])
    const data = await Produto.find({});

    return res.json(data);
  }
}

module.exports = new ProdutoController();