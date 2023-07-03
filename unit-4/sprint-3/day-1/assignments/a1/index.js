const express = require("express");

const { connection, MovieModel } = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Movie Mania!");
});

app.get("/movies", async (req, res) => {
  let query = req.query;
  try {
    const movie = await MovieModel.find(query);
    res.send(movie);
  } catch (err) {
    res.send("cannont get the movie");
  }
});

app.get("/SearchMovies", async (req, res) => {
  const searchTerm = req.query.q;
  const sortBy = req.query.sortBy;
  // console.log(sortBy);
  console.log(searchTerm);
  let movies;
  let query = {};

  if (searchTerm) {
    query.title = { $regex: new RegExp(searchTerm), $options: "i" };
  }

  movies = await MovieModel.find(query).sort(sortBy);

  res.send(movies);
});

app.post("/addmovies", async (req, res) => {
  try {
    const movie = new MovieModel(req.body);
    await movie.save();
    res.send({ msg: "Movie Posted Succesfully" });
  } catch (err) {
    res.send({ msg: "Cannot post this movie", error: err.message });
  }
});

app.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await MovieModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send({ msg: "Movie data has been updated" });
  } catch (err) {
    res.send({ msg: "Cannot Modify", " error": error.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await MovieModel.findByIdAndDelete({ _id: ID });
    res.send({ msg: "Movie data has been Deleted" });
  } catch (err) {
    res.send({ msg: "Cannot Delete", " error": error.message });
  }
});

app.listen(7300, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (err) {
    console.log("Cannot connect to the DB");
    console.log(err);
  }
  console.log("Server is running at post 7300");
});
