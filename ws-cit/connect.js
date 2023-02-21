const express = require('express');
const app = express();
const mongoConnector = require('./modulos/mongo/mongo-connect');
require('dotenv').config();

const producRouter = require('./controllers/productController');
const clienteRouter = require('./controllers/clienteController')

app.use(express.urlencoded({extended: false}));

// Mudar pra variavel de ambiente
mongoConnector.connect({
    stringConnection: process.env.MONGO_STRING_CONNECT
});

app.listen(3000);
app.use(producRouter, clienteRouter);

