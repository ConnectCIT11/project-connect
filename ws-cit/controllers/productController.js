const express = require("express");
const router = express.Router();

router.get("/products", (req,res) => {
    res.send('Get product')
});

router.post("/product", (res,req) => {
    res.send('Post product')
});


module.exports = router;
