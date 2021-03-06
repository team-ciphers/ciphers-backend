const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
const { createUser, getUsers, createFavorite, createToWatch, deleteFav, deleteToWatch, createReview, getReviews, deleteReview } = require('./controllers/User.controller')
const { getTopRatedMovies, getPopularMovies, MovieSearchByName, getUpcomingMovies, getTrailer } = require('./controllers/Movie.controller');
const { movieModel, seedUserModel } = require('./models/UserMovies.model');
mongoose.connect(`mongodb://Cipher:${process.env.MONGO_DB}@cluster0-shard-00-00.g6kih.mongodb.net:27017,cluster0-shard-00-01.g6kih.mongodb.net:27017,cluster0-shard-00-02.g6kih.mongodb.net:27017/MyMovieDatabase?ssl=true&replicaSet=atlas-6l6686-shard-0&authSource=admin&retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
app.get('/',
    function (req, res) {
        res.send('Hello World');
    });

app.get('/movies', MovieSearchByName);
app.get('/moviesUpcoming', getUpcomingMovies)
app.get('/moviesRated', getTopRatedMovies);
app.get('/moviesPopular', getPopularMovies);

app.post('/users', createUser)
app.get('/users', getUsers);

app.post('/usersFav', createFavorite);
app.delete('/usersFav/:idx', deleteFav);

app.post('/usersWatch', createToWatch);
app.delete('/usersWatch/:idx', deleteToWatch);

app.get('/userReview', getReviews);
app.post('/userReview', createReview);
app.delete('/userReview/:idx', deleteReview);

app.get('/movieTrailer', getTrailer);
app.listen(PORT);