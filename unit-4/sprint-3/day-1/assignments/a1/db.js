const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/movies");

const movieSchema = mongoose.Schema({
    title: {type: String, required: true},
    release_year: {type: Number, required: true},
    genre: {type: String, required: true},
    rating: {type: Number, required: true},
    duration: {type: Number, required: true}
},{
    versionKey: false
})

const MovieModel = mongoose.model("movieData",movieSchema);

module.exports = {connection, MovieModel};