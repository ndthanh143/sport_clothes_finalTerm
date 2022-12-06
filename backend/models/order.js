const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  shippingInfo: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    province: { type: String, required: true },
    phoneNo: { type: String, required: true },
  },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      color: { type: String, required: true },
      size: { type: String, required: true },
    },
  ],
  paymentInfo: {
    type: { type: String },
    status: { type: String, default: "Chưa thanh toán" },
  },
  paidAt: {
    type: Date,
  },
  notation: { type: String, default: "" },
  shippingPrice: { type: Number, required: true, default: 0 },
  totalPrice: { type: Number, required: true, default: 0 },
  orderStatus: { type: String, required: true, default: "Chờ xác nhận" },
  deliveredAt: {
    type: Date,
  },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Order", orderSchema);
