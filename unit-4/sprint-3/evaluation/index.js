const express = require("express");
require("dotenv").config();

const { connection } = require("./config/db");
const { foodRouter } = require("./routes/routes");

const app = express();
app.use(express.json());

app.use("/food", foodRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my food court");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
  console.log(`server is running at port ${process.env.PORT}`);
});