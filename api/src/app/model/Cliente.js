const mongoose = require("mongoose");

const ClienteSchema =  new mongoose.Schema(
    {
        nome: {
            type: String,
            require: true
        },
        telefone: {
            type: String,
            require: true
        },
        cpf: {
            type: String,
            require: true
        },
        dataNascimento: {
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true
        },
        senha: {
            type: String,
            require: true
        },
    }
);

module.exports = mongoose.model('clients', ClienteSchema);