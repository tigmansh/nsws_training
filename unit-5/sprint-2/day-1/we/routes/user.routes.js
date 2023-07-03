const express = require("express");
const { UserModel } = require("../models/user.model");
const { blacklist } = require("../configs/blacklisting");
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
            expiresIn: "3m",
          });

          refreshToken = jwt.sign(
            { userID: user._id },
            process.env.refreshedTokenSecret,
            {
              expiresIn: "4m",
            }
          );

          res.cookie("refreshtoken", refreshToken, {
            httpOnly: true,
           // sameSite: "strict",
            //secure: true,
            maxAge: 60 * 4 * 1000,
          });

          res.cookie("firsttoken", token, {
            httpOnly: true,
            //sameSite: "strict",
           // secure: true,
            maxAge: 60 * 3 * 1000,
          });
          //console.log(res.headers.set-cookie);
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

userRouter.post("/logout", async(req,res)=> {
  if(req.headers.cookie) {
    blacklist.push(req.headers.cookie);
    console.log(blacklist);
    delete req.headers.cookie;
    // console.log(req.headers);
   await res.send("Logged Out Successfully !");
  } else {
    await res.send("You are not logged in !!");
  }
})



module.exports = { userRouter };
