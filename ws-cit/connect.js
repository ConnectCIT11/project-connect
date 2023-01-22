const express = require('express');
const app = express();
const mongoConnector = require('./modulos/mongo/mongo-connect');

const producRouter = require('./controllers/productController');
app.use(express.urlencoded({extended: false}));

mongoConnector.connect({
    stringConnection: 'mongodb://app_user:app_password@localhost:27017/?authMechanism=DEFAULT'
});

app.listen(3000);
app.use(producRouter);