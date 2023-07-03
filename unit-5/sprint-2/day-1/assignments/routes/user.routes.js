const express = require("express");
const { UserModel } = require("../models/user.model");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const userRouter = express.Router();
userRouter.post("/register", async (req, res) => {
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
            msg: `Hello ${req.body.name} you are registered successfully`,
          });
        } else {
          res.send({ err: err.message });
        }
      });
    } catch (err) {
      res.send({ err: err.message });
    }
  }
});
var token;
var refreshToken;
userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const user = await UserModel.findOne({ email });

  try {
    if (user) {
      bcrypt.compare(pass, user.pass, (err, result) => {
        if (result) {
          token = jwt.sign({ userID: user._id }, process.env.firstTokenSecret, {
            expiresIn: "1h",
          });

          refreshToken = jwt.sign(
            { userID: user._id },
            process.env.refreshedTokenSecret,
            {
              expiresIn: "7d",
            }
          );

          res.cookie("refreshtoken", refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
          });

          res.cookie("firsttoken", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
          });

          res.send({ msg: "Login Successfully", token: token });
        }
      });
    } else {
      res.send({ err: "Invalid email or password" });
    }
  } catch (err) {
    res.send({ err: err.message });
  }
});

userRouter.get("/refresh_token", async (req, res) => {
  // let token = req.cookies.refreshToken;
  const decoded = jwt.verify(
    req.cookies.refreshtoken,
    process.env.refreshedTokenSecret
  );
  if (decoded) {
    let accessToken = jwt.sign(
      { userID: decoded.userID },
      process.env.firstTokenSecret,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("firsttoken", accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });
    res.send({ msg: "Token Refreshed", firsttoken: accessToken });
  } else {
    res.send({ err: "Login Again" });
  }
});
module.exports = { userRouter };
