const express = require("express");

const { OrderModel } = require("../models/orders.model");

const orderRouter = express.Router();

orderRouter.get("/", async (req, res) => {
  const data = await OrderModel.find({ userID: req.body.userID });
  try {
    if (data.length > 0) {
      res.send({ msg: data });
    } else {
      res.send({ msg: "No Orders !!" });
    }
  } catch (err) {
    res.send({ err: err.message });
  }
});

orderRouter.post("/makeOrder", async (req, res) => {
  const order = req.body;
  try {
    const purchasing = new OrderModel(order);
    await purchasing.save();
    res.send({ msg: "Order Created !" });
  } catch (err) {
    res.send({ err: err.message });
  }
});

orderRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  const purchasing = await OrderModel.findOne({ _id: id });
  try {
    if (purchasing.userID === req.body.userID) {
      await OrderModel.findByIdAndUpdate({ _id: id }, payload);
      res.send({ msg: "Your Order is Updated !!!" });
    } else {
      res.send({ err: "Order is not updated due to some unknown errors" });
    }
  } catch (err) {
    res.send({ err: err.message });
  }
});

module.exports = { orderRouter };
