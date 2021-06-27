"use strict";

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    movieId:{ type: Number },
  reviews:{type: Array}

}) // this is dedicated for the profile page lists for the user.

const reviewModel = mongoose.model('reviewsList', reviewSchema);


const seedMovieId = (movieId ,review) => {

    const newUser = new reviewModel({
        movieId:movieId,
        reviews:[]
    });
    newUser.reviews.push(review);
    newUser.save();
    console.log(newUser);
};
module.exports = {reviewModel ,seedMovieId}


