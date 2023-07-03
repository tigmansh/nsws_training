const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: String,
    text: String,
    userID: String,
  },
  {
    versionKey: false,
  }
);

const BlogModel = mongoose.model("note", blogSchema);

module.exports = { BlogModel };
