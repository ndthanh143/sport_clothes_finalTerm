const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    trim: true,
    default: 0,
  },
  images: [
    {
      url: { type: String, required: true },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
  },
  sizes: [
    {
      value: { type: String },
      amount: { type: Number, default: 0 },
    },
  ],
  stock: { type: Number, required: true, default: 0 },
  colors: [
    {
      type: String,
    },
  ],
  description: { type: String },
  slug: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
