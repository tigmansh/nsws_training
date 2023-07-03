const express = require("express");

const { UserModel } = require("../models/user.model");

const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, country, state, email, pass, address } = req.body;

  const x = await UserModel.findOne({ email: req.body.email });
  if (x) {
    res.send({ err: "This email-id is already registered" });
  } else {
    try {
      const user = new UserModel({
        name,
        country,
        state,
        email,
        pass,
        address,
      });
      await user.save();
      res.send({ msg: "User Registered" });
    } catch (err) {
      res.send({ err: err.message });
    }
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const user = await UserModel.find({ email });
  try {
    if (user.length > 0) {
      const token = jwt.sign({ userID: user[0]._id }, "masai", {
        expiresIn: "5h",
      });
      res.send({ msg: "Logged In", token: token });
    } else {
      res.send({ err: "Wrong Password" });
    }
  } catch (err) {
    res.send({ err: err.message });
  }
});

module.exports = { userRouter };
