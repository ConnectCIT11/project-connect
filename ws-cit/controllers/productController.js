const express = require("express");
const router = express.Router();
const {finfById, findAllProducts } = require("../services/productService");


router.get("/products", async (req,res) => {

    console.log('controller');

    const data = await findAllProducts();

    res.send(data);
});

router.get('/product/:id', (req, res) => {
    res.send(finfById(req.params.id));
});

module.exports = router;
