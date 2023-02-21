
class ClienteController {
    login(req, res){
        // const data = await Cliente.find({});

        const { name, password } = req.body;

        if (name === "deyveson" && password === "12345") {

            const jwt = require("jsonwebtoken");

            const dadosUsuario = {
                nome: "deyveson",
                email: "deyveson@outlook.com",
                id: 1
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

        // Efetuando a validação do JWT:
        const jwtService = require("jsonwebtoken");
        jwtService.verify(jwt, chavePrivada, (err, userInfo) => {
            if (err) {
                res.status(403).end();
                return;
            }

            res.json(userInfo);
        });
    }

}


module.exports = new ClienteController();