const mongoose = require("mongoose");

const ClienteSchema =  new mongoose.Schema(
    {
        nick: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    }
);

module.exports = mongoose.model('clients', ClienteSchema);