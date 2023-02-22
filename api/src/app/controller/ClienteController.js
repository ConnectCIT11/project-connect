const Cliente = require("../model/Cliente");

class ClienteController {
    async login(req, res){

        const { email, senha } = req.body;

        const data = await Cliente.find({email, senha});


        console.log(data)
        if (data.length != 0) {

            const jwt = require("jsonwebtoken");

            const dadosUsuario = {
                nome: data[0].nome,
                email: data[0].email,
                // id: data[0]._id
            };
            
            const chavePrivada = "conect.com.br";

            jwt.sign(dadosUsuario, chavePrivada, (err, token) => {
                if (err) {
                    res
                        .status(500)
                        .json({ mensagem: "Erro ao gerar o JWT" });

                    return;
                }

                res.set("x-access-token", token);
                res.end();
            });
        } else {
            
            res.status(401);
            res.end();
        }

    }

    getInfo(req, res){

        const jwt = req.headers["authorization"];
        const chavePrivada = "conect.com.br";

        const jwtService = require("jsonwebtoken");
        jwtService.verify(jwt, chavePrivada, (err, userInfo) => {
            if (err) {
                res.status(403).end();
                return;
            }
            console.log(userInfo)
            res.json(userInfo);
        });
    }

    async store(req, res){

        const data = await Cliente.create(req.body);

        return res.json({data});
    }

}


module.exports = new ClienteController();