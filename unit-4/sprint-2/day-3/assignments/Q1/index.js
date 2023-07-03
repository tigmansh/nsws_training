const express = require("express");
const app = express();

app.use(express.json());

const validateMovieData = (req, res, next) => {
  const { id,name, rating, description, genre, cast } = req.body;

  if (!id || !name || !rating || !description || !genre || !cast) {
    return res.status(400).send({
      error: "All fields are required: id, name, rating, description, genre, cast",
    });
  }

  if (typeof rating !== "number" || typeof id !== "number"){
    return res.status(400).send({
      error: "rating & id should be a number",
    });
  }

  if (
    typeof name !== "string" ||
    typeof description !== "string" ||
    typeof genre !== "string"
  ) {
    return res.status(400).send({
      error: "name, description, and genre should be a string",
    });
  }

  if (!Array.isArray(cast) || cast.some((member) => typeof member !== "string")) {
    return res.status(400).send({
      error: "cast should be an array of strings",
    });
  }

  next();
};

app.post("/movies", validateMovieData, (req, res) => {
  const { name, rating, description, genre, cast } = req.body;
  // Add movie data to the database here
  res.send({
    message: "Movie data added successfully!",
    movie: { id, name, rating, description, genre, cast },
  });
});

app.listen(7300, () => {
  console.log("Server started on port 7300");
});
