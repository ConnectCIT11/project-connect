const express = require("express");
const router = express.Router();
const finfById = require("../services/productService");


router.get("/products", (req,res) => {
    res.send('Get product')
});

router.get('/product/:id', (req, res) => {
    res.send(finfById(req.params.id));
});

module.exports = router;
