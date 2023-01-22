const mongoose = require('mongoose');

module.exports = (credencials) => {

    const { stringConnection } = credencials;

    // mongoose.set('useFindAndMotify', false);
    mongoose.Promise = Promise;
    const connection = mongoose.createConnection(stringConnection, {
        socketTimeoutMS: 0,
        keepAlive: true,
        connectTimeoutMS: 500,
        maxPoolSize: 10,
        autoIndex: true
    })
    .on('error', (args) => {
        console.log('Unable to connect to the databse  MONGODB');
    })
    .on('open', () => {
        console.log(`Connect to MONGODB has been established sucessfully.`);
    });

    connection.mongoose = mongoose;

    return connection;
};