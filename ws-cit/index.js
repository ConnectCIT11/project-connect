const express = require('express');
const app = express();


const producRouter = require('./controllers/productController');
app.use(express.urlencoded({extended: false}));


app.listen(3000);
app.use(producRouter);