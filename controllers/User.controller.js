
const { movieModel } = require('../models/UserMovies.model');
const { seedUserModel } = require('../models/UserMovies.model');
const { reviewModel, seedMovieId } = require('../models/Reviews.model');


const getUsers = (req, res) => {

    const { email } = req.query;
    movieModel.find({ email: email }, (error, user) => {
        if (error) {
            res.send(error);
        }
        else {
            res.json(user);
        }
    })
}


const createUser = (req, res) => {
    const { email } = req.body;
    console.log(req.body);
    movieModel.find({ email: email }, (error, userData) => {
        if (error) {

            res.send(error);
        }
        else {
            if (userData.length === 0) {
                seedUserModel(email);
                res.send('potato');
            }
            else {
                console.log("email found");
                res.send(userData);
            }

        }
    })
}

const createFavorite = (req, res) => {
    const email = req.body.email;
    const Movie = req.body.Movie;
    console.log(req.body);
    movieModel.findOne({ email: email }, (error, userData) => {
        if (error) {

            res.send(error);
        }
        else {
            console.log(userData.favMovie);
            userData.favMovie.push(Movie);
            userData.save();
            res.send(userData);
        }
    })
}

const createToWatch = (req, res) => {
    const email = req.body.email;
    const Movie = req.body.Movie;
    console.log(req.body);
    movieModel.findOne({ email: email }, (error, userData) => {
        if (error) {

            res.send(error);
        }
        else {
            console.log(userData.favMovie);
            userData.to_watch.push(Movie);
            userData.save();
            res.send(userData);
        }
    })
}

const deleteFav = (req, res) => {
    const idx = req.params.idx;
    const { email } = req.query;
    movieModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            res.send(error);
        }
        else {
            console.log(userData)
            userData.favMovie.splice(idx, 1);
            userData.save();
            res.send(userData);
            console.log(userData);
        }
    })
}

const deleteToWatch = (req, res) => {
    const idx = req.params.idx;
    const { email } = req.query;
    movieModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            res.send(error);

        }
        else {
            console.log(userData)
            userData.to_watch.splice(idx, 1);
            userData.save();
            res.send(userData);
            console.log(userData);

        }
    })
    console.log(req.params);

}


const createReview = (req, res) => {
    const { movieId, review } = req.body;

    reviewModel.find({ movieId: movieId }, (error, userData) => {
        if (error) {

            res.send(error);
        }
        else {
            console.log('userdata', userData);

            if (userData.length === 0) {
                seedMovieId(movieId, review);
                res.send(userData);
                console.log('if state');
            }
            else {
                userData[0].reviews.push(review);
                userData[0].save();
                console.log('else state')
                res.send(userData);
            }
        }
    })
}

const getReviews = (req, res) => {

    const { movieId } = req.query;
    reviewModel.find({ movieId: movieId }, (error, user) => {
        if (error) {
            res.send(error);
        }
        else {
            res.json(user);
        }
    })
}

const deleteReview = (req, res) => {
    const idx = req.params.idx;
    const { movieId } = req.query;
    reviewModel.findOne({ movieId: movieId }, (error, userData) => {
        if (error) {
            res.send(error);

        }
        else {
            console.log(userData)
            userData.reviews.splice(idx, 1);
            userData.save();
            res.send(userData);
            console.log(userData);

        }
    })
    console.log(req.params);

}



module.exports = { createUser, getUsers, createFavorite, createToWatch, deleteFav, deleteToWatch, createReview, getReviews, deleteReview };