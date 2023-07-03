const express = require("express");
const { TodoModel } = require("../model/todo.model");

const todoRouter = express.Router();
todoRouter.use(express.json());
todoRouter.get("/", async (req, res) => {
  const query = req.query;
  try {
    const todos = await TodoModel.find(query);
    res.send(todos);
  } catch (err) {
    res.send({ msg: "Cannot get", error: err.message });
  }
});

todoRouter.post("/addtodo", async (req, res) => {
  try {
    const todo = new TodoModel(req.body);
    await todo.save();
    res.send({ msg: "Todo is added" });
  } catch (err) {
    res.send({ msg: "Todo is not added", error: err.message });
  }
});

todoRouter.patch("/:id", async (req, res) => {
    const data = req.body;
    const id = req.params.id;
  try {
    await TodoModel.findByIdAndUpdate({_id:id},data)
    res.send({ msg: "Todo has been updated" });
  } catch (err) {
    res.send({ msg: "Todo is not updated", error: err.message });
  }
});

todoRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
  try {
    await TodoModel.findByIdAndDelete({_id:id})
    res.send({ msg: "Todo has been deleted" });
  } catch (err) {
    res.send({ msg: "Todo is not deleted", error: err.message });
  }
});

module.exports = {todoRouter}