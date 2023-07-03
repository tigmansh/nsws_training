const express = require("express");
const { connection } = require("./configs/db");
const { userModel } = require("./model/user.model");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.post("/register", async (req, res) => {
  const userDetail = req.body;
  try {
    const user = new userModel(userDetail);
    await user.save();
    res.send({ msg: "User Registered" });
  } catch (err) {
    res.send({ msg: "Something went Wrong", Error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const token = jwt.sign({ course: "backend" }, "masai", { expiresIn: "1h" });
  try {
    const user = await userModel.find({ email, pass });
    if (user.length > 0) {
      res.send({ msg: "Login Successful", token: token });
    } else {
      res.send({ msg: "Wrong credentials" });
    }
  } catch (err) {
    res.send({ msg: "Something went Wrong", Error: err.message });
  }
});

app.get("/data", (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "masai", (err, decoded) => {
    if (decoded) {
      res.send({ msg: "Data is here..." });
    } else {
      res.send({ msg: "Something went wrong", Error: err.message });
    }
  });
});

app.get("/cart", (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "masai", (err, decoded) => {
    if (decoded) {
      res.send({ msg: "Cart data is here..." });
    } else {
      res.send({ msg: "Something went wrong", Error: err.message });
    }
  });
});

app.get("/about", (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "masai", (err, decoded) => {
    if (decoded) {
      res.send({ msg: "This is About page..." });
    } else {
      res.send({ msg: "Something went wrong", Error: err.message });
    }
  });
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (err) {
    console.log(err);
  }
  console.log("Running at port 8080");
});
