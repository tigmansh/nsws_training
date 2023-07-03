const express = require("express");
const moviesRouter = express.Router();
const fs = require('fs');
const app = express();

const {validateUser} = require("../middleware/validator");

moviesRouter.use(express.json());

moviesRouter.get("/", (req,res)=>{
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsed = JSON.parse(data);
    res.send(parsed.movies);
})

moviesRouter.get("/:movieId", (req,res)=>{
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsed = JSON.parse(data);
    let filtered = parsed.movies.filter(ele=>{
        return(req.params.movieId == ele.movie_id)
    })

    res.send(filtered);
})

moviesRouter.post("/addmovie", (req,res)=>{
    let data = fs.readFileSync("./db.json", 'utf-8');
    let parsed = JSON.parse(data);

    parsed.movies.push(req.body);

    fs.writeFileSync("./db.json", JSON.stringify(parsed));
    res.send(parsed.movies);
})

moviesRouter.use(validateUser);

moviesRouter.delete("/", (req,res)=>{
    let movieId = req.query.id;

    let data = fs.readFileSync("./db.json", "utf-8");
    let parsed = JSON.parse(data);
    let filtered = parsed.movies.filter((ele)=>{
        if(ele.movie_id != movieId){
            return ele;
        };
    })
    res.send(filtered);
    parsed.movies = filtered;
    fs.writeFileSync("./db.json", JSON.stringify(parsed));
})

moviesRouter.patch("/", (req,res)=>{
    let movieId = req.query.id;

    let data = fs.readFileSync("./db.json", "utf-8");
    let parsed = JSON.parse(data);
    let bodyData = req.body;

    parsed.movies.forEach((ele)=>{
        if(ele.movie_id == movieId){
            ele.name = bodyData.name;
            ele.genre = bodyData.genre;
            ele.director = bodyData.director;
        };
    });
    res.send(parsed.movies);
    fs.writeFileSync("./db.json", JSON.stringify(parsed));
})

module.exports = {moviesRouter};