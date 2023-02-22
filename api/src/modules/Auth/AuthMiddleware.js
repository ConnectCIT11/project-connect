
const middlewareValidarJWT = (authorization) => {
    const chavePrivada = "conect.com.br";

    // Efetuando a validação do JWT:
    const jwtService = require("jsonwebtoken");
    jwtService.verify(authorization, chavePrivada, (err, userInfo) => {
        if (err) {
            res.status(403).end();
            return;
        }

        return userInfo;
    });
};


module.exports = middlewareValidarJWT;