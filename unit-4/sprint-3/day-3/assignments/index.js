const express = require("express");
require("dotenv").config();
const { connection } = require("./db");
const {todoRouter} = require("./routes/todo.routes");

const app = express();
app.use(express.json());

app.use("/todo", todoRouter);
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Successfully Connected To Your DB");
  } catch (err) {
    console.log("Connection Failed");
    console.log(err);
  }
  console.log(`Server is running at port ${process.env.port}.`);
});
