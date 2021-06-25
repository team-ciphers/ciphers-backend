"use strict";

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

module.exports = movieSchema