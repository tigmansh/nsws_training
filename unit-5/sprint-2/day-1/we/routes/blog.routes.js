const express = require("express");

const { BlogModel } = require("../models/blog.model");

require("dotenv").config();

const blogRouter = express.Router();

blogRouter.get("/",async(req,res)=>{
    res.send("Your Notes Here");
})

module.exports = { blogRouter };