const express = require("express");
const seriesRouter = express.Router();
const fs = require('fs');
const app = express();

const {validateUser} = require("../middleware/validator");

seriesRouter.use(express.json());

seriesRouter.get("/", (req,res)=>{
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsed = JSON.parse(data);
    res.send(parsed.series);
})

seriesRouter.get("/:seriesId", (req,res)=>{
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsed = JSON.parse(data);
    let filtered = parsed.series.filter(ele=>{
        return(req.params.seriesId == ele.series_id)
    })

    res.send(filtered);
})

seriesRouter.post("/addseries", (req,res)=>{
    let data = fs.readFileSync("./db.json", 'utf-8');
    let parsed = JSON.parse(data);

    parsed.series.push(req.body);

    fs.writeFileSync("./db.json", JSON.stringify(parsed));
    res.send(parsed.series);
})

seriesRouter.use(validateUser);

seriesRouter.delete("/", (req,res)=>{
    let seriesId = req.query.id;

    let data = fs.readFileSync("./db.json", "utf-8");
    let parsed = JSON.parse(data);
    let filtered = parsed.series.filter((ele)=>{
        if(ele.series_id != seriesId){
            return ele;
        };
    })
    res.send(filtered);
    parsed.series = filtered;
    fs.writeFileSync("./db.json", JSON.stringify(parsed));
})

seriesRouter.patch("/", (req,res)=>{
    let seriesId = req.query.id;

    let data = fs.readFileSync("./db.json", "utf-8");
    let parsed = JSON.parse(data);
    let bodyData = req.body;

    parsed.series.forEach((ele)=>{
        if(ele.movie_id == seriesId){
            ele.name = bodyData.name;
            ele.genre = bodyData.genre;
            ele.director = bodyData.director;
        };
    });
    res.send(parsed.series);
    fs.writeFileSync("./db.json", JSON.stringify(parsed));
})

module.exports = {seriesRouter};