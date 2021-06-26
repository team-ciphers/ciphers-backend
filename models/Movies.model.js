// "use strict";

const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    original_title: { type: String },
    overview: { type: String },
    release_date: { type: String },
    vote_average: { type: String },
    genre: { type: String }, //from the movie api.. this is saved inside the (genre.name)
    poster_path: { type: String },
    popularity: { type: String }
})

class Movie {
    constructor(original_title, overview, release_date, vote_average,poster_path){
      this.original_title = original_title;
      this.overview = overview;
      this.release_date = release_date;
      this.vote_average = vote_average;
      this.poster_path = poster_path;
    }
  }

module.exports = {Movie , MovieSchema};