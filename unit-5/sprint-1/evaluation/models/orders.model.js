const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    Product_name: { type: String, required: true },
    cost_unit_price: { type: Number, required: true },
    qty: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    address: { type: Array, required: true },
    userID: String
  },
  {
    versionKey: false,
  }
);

const OrderModel = mongoose.model("order", orderSchema);
module.exports = { OrderModel };
