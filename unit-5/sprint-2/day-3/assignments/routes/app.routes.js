const express = require("express");

const { UserModel } = require("../models/user.model");

const bcrypt = require("bcrypt");

const { authentication } = require("../middleware/authenticate");

const { authorise } = require("../middleware/authorise");

require("dotenv").config();

const appRouter = express.Router();

appRouter.post(
  "/createuser",
  authentication,
  authorise(["super admin", "admin"]),
  async (req, res) => {
    const { name, email, pass } = req.body;
    const x = await UserModel.findOne({ email: req.body.email });

    if (x) {
      res.send({ err: "This email-id is already registered !" });
    } else {
      try {
        bcrypt.hash(pass, 8, async (err, hash) => {
          if (!err) {
            const user = new UserModel({ name, email, pass: hash });
            await user.save();
            res.send({
              msg: `${req.body.name}'s account is created successfully by ${req.user.role} side.`,
            });
          } else {
            res.send({ err: err.message });
          }
        });
      } catch (err) {
        res.send({ err: err.message });
      }
    }
  }
);

appRouter.delete(
  "/deleteuser",
  authentication,
  authorise(["super admin", "admin"]),
  async (req, res) => {
    const { email } = req.body;
    const targetUser = await UserModel.findOne({ email: email });
    console.log(targetUser);
    if (targetUser.role === "admin" || targetUser.role === "super admin") {
      res.send({ err: "This request cannot be fulfilled." });
    } else {
      const x = await UserModel.findOneAndDelete({ email: targetUser.email });
      if (!x) {
        res.send({ err: `${req.body.email} is not found in your database.` });
      } else {
        res.send({
          msg: `${req.body.email} is deleted succesfully by ${req.user.role} side.`,
        });
      }
    }
  }
);

appRouter.get(
  "/allusers",
  authentication,
  authorise(["super admin"]),
  async (req, res) => {
    const x = await UserModel.find();
    res.send(x);
  }
);

appRouter.get("/profile", authentication, (req, res) => {
  res.send(`This is ${req.user.name}'s profile.`);
});

module.exports = { appRouter };
