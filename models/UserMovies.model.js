"use strict";

const mongoose = require("mongoose");
const MovieSchema = require("./Movies.model");

const UserMovies = new mongoose.Schema({
    email: { type: String },
    favMovie: [MovieSchema],
    to_watch: [MovieSchema]
}) // this is dedicated for the profile page lists for the user.

const movieModel = mongoose.model('moviesList', MovieSchema);


module.exports = movieModel
