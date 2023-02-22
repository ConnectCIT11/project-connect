const Produto = require("../model/Produto");
const middlewareValidarJWT = require("../../modules/Auth/AuthMiddleware");

class ProdutoController {
  async store(req, res) {
    const token = req.headers["authorization"]
    const validacao = middlewareValidarJWT(token);

    if (!validacao.erro){
      const data = await Produto.create(req.body);
      res.status(200);
      return res.json(data);
    }else{
      res.status(validacao.erro);
      return res.json(validacao.descricao);
    }
  }
  async index(req, res) {
    const data = await Produto.find({});

    return res.json(data);
  }
}

module.exports = new ProdutoController();