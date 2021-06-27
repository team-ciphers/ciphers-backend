"use strict";

const mongoose = require("mongoose");
const {MovieSchema} = require("./Movies.model");

const userSchema = new mongoose.Schema({
    email: { type: String },
    favMovie: [MovieSchema],
    to_watch: [MovieSchema]
}) // this is dedicated for the profile page lists for the user.

const movieModel = mongoose.model('moviesList', userSchema);


const seedUserModel = (userEmail) => {

    const newUser = new movieModel({
        email:userEmail,
        favMovie:[],
        to_watch:[]
    });
    newUser.save();
    console.log(newUser);
};
module.exports = {movieModel , seedUserModel}


