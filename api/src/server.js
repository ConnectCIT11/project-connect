const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require('dotenv').config();

const logger = require("./modules/Log/Logger.js");
class App {
  constructor() {
    this.express = express();
    this.express.use(cors());
    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(3001, () =>
      logger.info('Serving run port 3001')
    );
  }

  database() {
    mongoose.connect(process.env.MONGO_STRING_CONNECT, { useNewUrlParser: true });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;