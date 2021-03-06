// "use strict";

const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  original_title: { type: String },
  overview: { type: String },
  release_date: { type: String },
  vote_average: { type: String },
  poster_path: { type: String },
  id: { type: Number }
})

class Movie {
  constructor(original_title, overview, release_date, vote_average, poster_path, movieId) {
    this.original_title = original_title;
    this.overview = overview;
    this.release_date = release_date;
    this.vote_average = vote_average;
    this.poster_path = poster_path;
    this.movieId = movieId;
  }
}

module.exports = { Movie, MovieSchema };