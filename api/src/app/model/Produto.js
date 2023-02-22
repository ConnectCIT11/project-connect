const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    isMain: {
      type: Boolean,
      required: true
    },
    plans: {
      type: Array,
      required: true 
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("products", ProdutoSchema);