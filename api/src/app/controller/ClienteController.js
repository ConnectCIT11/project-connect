const middlewareValidarJWT = require("../../modules/Auth/AuthMiddleware");
const logger = require("../../modules/Log/Logger");
const Cliente = require("../model/Cliente");
require('dotenv').config();

class ClienteController {
    async login(req, res){

        const { email, senha } = req.body;

        const data = await Cliente.find({email, senha});

        if (data.length != 0) {

            const jwt = require("jsonwebtoken");

            const dadosUsuario = {
                nome: data[0].nome,
                email: data[0].email,
                // id: data[0]._id
            };
            
            jwt.sign(dadosUsuario, process.env.CHAVE_PRIVADA, (err, token) => {
                if (err) {
                    res
                        .status(500)
                        .json({ mensagem: "Erro ao gerar o JWT" });

                    return;
                }

                logger.info('Login sucesso')
                res.set("x-access-token", token);
                res.end();
            });
        } else {
            
            logger.warn('Login error')
            res.status(401);
            res.send({
                erro: 401,
                descricao: 'Nome ou senha invalidos'
            })
            res.end();
        }

    }

    getInfo(req, res){

        const token = req.headers["authorization"]
        const validacao = middlewareValidarJWT(token);

        if (!validacao.erro){
            res.status(200);
            return res.json({
                code: 200,
                descricao: 'Token validado com sucesso'
            });
          }else{
            res.status(validacao.erro);
            return res.json(validacao.descricao);
          }
    }

    async store(req, res){
        try{
            const data = await Cliente.create(req.body);
            logger.info('Cliente cadastrado com sucesso');
            return res.json({data});
        }catch{ 
            logger.warn('Login error')
            res.status(404);
            res.send({
                erro: 404,
                descricao: 'Erro ao persistir cliente'
            })
            res.end();
        }
    }
}


module.exports = new ClienteController();