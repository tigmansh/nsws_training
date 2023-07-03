const express = require("express");
const { UserModel } = require("../models/user.model");
const redis = require("redis");
const client = redis.createClient();

client.connect();

client.on("error", (err) => {
  console.error("Error connecting to Redis:", err);
});

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
      bcrypt.compare(pass, user.pass, async(err, result) => {
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
          await client.SETEX("token", 3600, JSON.stringify(token));
          await client.SETEX("refreshToken", 604800, JSON.stringify(refreshToken));
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
  const data = await client.get("refreshToken");
  const refreshToken = JSON.parse(data);
  const decoded = jwt.verify(
    refreshToken,
    process.env.refreshedTokenSecret
  );
  if (decoded) {
    let token = jwt.sign(
      { userID: decoded.userID },
      process.env.firstTokenSecret,
      {
        expiresIn: "1h",
      }
    );

    await client.SETEX("token", 3600, JSON.stringify(token));
    res.send({ msg: "Token Refreshed", token: token });
  } else {
    res.send({ err: "Login Again" });
  }
});
module.exports = { userRouter };
