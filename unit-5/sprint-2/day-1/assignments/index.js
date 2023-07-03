const express = require("express");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/user.routes");
const { authentication } = require("./middleware/authenticate");
const { blogRouter } = require("./routes/blog.routes");

const cors = require("cors");

var cookieParser = require('cookie-parser')
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req,res)=>{
    res.send("HOME PAGE !");
});
app.use(cookieParser());
app.use("/user", userRouter);
app.use(authentication);
app.use("/blog", blogRouter);

app.listen(process.env.PORT, async()=>{
    try{
        await connection;
        console.log("Connected to DB");
    }catch(err){
        console.log(err.message);
    }
    console.log(`Server is running at PORT ${process.env.PORT}`);
})