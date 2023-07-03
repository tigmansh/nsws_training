const nodemailer = require("nodemailer");
const express = require("express");
const session = require("express-session");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(
  session({
    secret: process.env.secret
  })
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

app.post("/sendotp", (req, res) => {
  let OTP = Math.round(Math.random() * 9000 + 1000);
  req.session.OTP = OTP;
  transporter
    .sendMail({
      from: process.env.user,
      to: req.body.email, // my 2nd mail-id...
      subject: "Verification Mail",
      text: `Thank you for registering with us your OTP is ${OTP}.`,
    })
    .then((result) => {
      res.send({ Msg: "Mail sent successfully" });
    })
    .catch((err) => {
      res.send({ Error: err.message });
    });
});

app.post("/verify", (req, res) => {
  console.log(req.session);
  if (!req.session.OTP) {
    res.send("OTP EXPIRED ❌");
  } else if (req.session.OTP === req.body.OTP) {
    res.send("You are verified ✅");
  } else {
    res.send("OTP is wrong ❌");
  }
});

app.listen(process.env.port, () => {
  console.log(`server is running at port ${process.env.port}`);
});
