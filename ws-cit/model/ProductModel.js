const mongoose = require("mongoose");

const  ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    price: {
      type: String
    },
    timePayment: {
      type: String
    },
    description: {
      type: String
    },
    startTime: {
      type: String
    },
    endTime: {
      type: String
    }
  }
);

module.exports = mongoose.model("products", ProductSchema);
