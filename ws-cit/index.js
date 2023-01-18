const express = require('express');
const req = require('express/lib/request');
const app = express();

app.use(express.urlencoded({extended: false}));
app.listen(3000);
app.get("/", (req, res) => {
 res.send('Sucesso')
});
app.post("/users", (req, res) => {

});