const express = require("express");

const app = express();

const {moviesRouter} = require("./routes/movies.route");
const {seriesRouter} = require("./routes/series.route");
const {logger} = require("./middleware/logger.js");

// app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/series", seriesRouter);
app.use(logger);

app.get("/",(req,res)=>{
    console.log('HOME');
    res.send('HOME');
});

app.listen(7300, ()=>{
    console.log("Server is running at port 7300");
});