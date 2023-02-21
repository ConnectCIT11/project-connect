const mongoose = require('mongoose');
const Connector = require('../../lib/mongo');


class MongoConnection {
    constructor(){
        this.connection = {};
        this.dataInfo = {}
        this.SchemasMap = new Map();
    }

    connect(mongoCredentials) {
        this.connection = Connector(mongoCredentials);
    }

    addSchema(collectionName, schema) {
        this.SchemasMap.set(collectionName, new mongoose.Schema(schema, {collection: collectionName}));    
    }

    getSchema(collectionName){
        return this.SchemasMap.get(collectionName)
    }

    save(collectionName, data, modelName){
        return new Promise((resolve, reject) => {
            this.dataInfo = this.connection.model(modelName ? modelName : 'dataInfo', this.getSchema(collectionName))

            const model = new this.dataInfo(data);
            model.save(function (err, obj) {
                if(err) {
                    console.error(new Date() + 'SAVE ERRO LOGANDO DB: ', + err)
                } else {
                    console.error(new Date() + 'SAVE ERRO LOGANDO DB' + 'obj não salvo no db:', obj)
                    reject(undefined)
                }
            });
        })
    }

    async find(collectionName, data, modelName){
        return new Promise((resolve, reject) => {

            const model = this.connection.model(modelName ? modelName : 'dataInfo', this.getSchema(collectionName))
            model.find(data).deleteMany().exec(function (eer) {
                if(err){
                    reject(err)
                }else{
                    resolve(true)
                }
            });
        })
    }

    async isConnected(){
        return new Promise((resolve, reject) => {
            this.connection.readyState === 1 ? resolve('Conectado'): reject('Nao conectado');
        })
    }

}

module.exports = new MongoConnection();