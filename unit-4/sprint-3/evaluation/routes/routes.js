const express = require("express");
const { foodModel } = require("../model/model");
const { validator } = require("../middlewares/validator");
const { record } = require("../middlewares/record");
const foodRouter = express.Router();
foodRouter.use(express.json());

foodRouter.use((req, res, next) => {
  validator(req, res, next);
});

// POST ROUTE...

foodRouter.post("/addfood", async (req, res) => {
  try {
    let foodEntry = new foodModel(req.body);
    await foodEntry.save();
    res.send({ msg: "Food is added to menu" });
  } catch (err) {
    res.send({ Error: `Due to this ${err.message}` });
  }
});

// GET ROUTE...

foodRouter.get("/", async (req, res) => {
  if (req.query.min && req.query.max) {
    try {
      let foodEntry = await foodModel.find({
        $and: [
          { rating: { $gt: req.query.min } },
          { rating: { $lt: req.query.max } },
        ],
      });
      res.send(foodEntry);
    } catch (err) {
      res.send({ Error: `Due to this ${err.message}` });
    }
  } else if (req.query.cuisine) {
    try {
      let foodEntry = await foodModel.find({ cuisine: req.query.cuisine });
      res.send(foodEntry);
    } catch (err) {
      res.send({ Error: `Due to this ${err.message}` });
    }
  } else if (req.query.price) {
    try {
      let foodEntry = await foodModel.find({ price: { $lt: req.query.price } });
      res.send(foodEntry);
    } catch (err) {
      res.send({ Error: `Due to this ${err.message}` });
    }
  } else{
    try{
        let foodEntry = await foodModel.find();
        res.send(foodEntry);
    }catch(err){
        res.send({ Error: `Due to this ${err.message}` });
    }
  }
});

foodRouter.use((req,res,next)=>{
    record(req,res,next);
})

// PATCH ROUTE...

foodRouter.patch("/update/:id", async(req,res)=>{
    try{
        await foodModel.findByIdAndUpdate({_id: req.params.id}, req.body);
        res.send({msg:"Food is updated in the menu"});
    }catch(err){
        res.send({ Error: `Due to this ${err.message}` });
    }
});

// DELETE ROUTE...

foodRouter.delete("/delete/:id", async(req,res)=>{
    try{
        await foodModel.findByIdAndDelete({_id: req.params.id});
        res.send({msg:"Food is deleted from the menu"});
    }catch(err){
        res.send({ Error: `Due to this ${err.message}` });
    }
});

module.exports = { foodRouter };