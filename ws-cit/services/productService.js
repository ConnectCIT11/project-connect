// const mongoConnect = require('../modulos/mongo/mongo-connect')
// const moongose = require('mongoose');
// const mongoConnect = require('../modulos/mongo/mongo-connect');
const ProductSchema = require('../model/ProductModel');

const mongoConnector = require('../modulos/mongo/mongo-connect');

const finfById = (id) => {
    const products = ['1 dia', '2 dias', '3 dias']
    return products[id];
}

const findAllProducts = async () => {

    mongoConnector.addSchema('products')
    const data = mongoConnector.find('products', {}, ProductSchema)

    return data;
}

module.exports = {finfById, findAllProducts};