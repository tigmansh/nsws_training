const express = require("express");

const { userRouter } = require("./routes/user.routes");
const { orderRouter } = require("./routes/order.routes");
const { authentication } = require("./middleware/authentication");
const { connection } = require("./configs/db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.use("/users", userRouter);
app.use(authentication);
app.use("/orders", orderRouter)

app.listen(7300, async() => {
    try{
        await connection;
        console.log("Connected to DB");
    }catch(err){
        console.log(err);
    }
  console.log("Server is running at port 7300");
});
