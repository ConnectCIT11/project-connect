const logger = require("../Log/Logger");

const middlewareValidarJWT = (authorization) => {

    if(authorization){
        const chavePrivada = "conect.com.br";

        const jwtService = require("jsonwebtoken");
        return jwtService.verify(authorization, chavePrivada, (err, userInfo) => {
            if (err) {
                logger.warn('Token invalido');
                return {
                    erro: 403,
                    descricao: 'Token invalido'
                }
            }
            logger.info('Token validado com sucesso');
            return userInfo
        });
    }else{
        logger.warn('Sem token para validacao');
        return {
            erro: 401,
            descricao: 'Sem token'
        }
    }
    
};


module.exports = middlewareValidarJWT;