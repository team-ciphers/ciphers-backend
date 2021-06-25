const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const {getTopRatedMovies,getPopularMovies,MovieSearchByName,getUpcomingMovies} = require('./controllers/Movie.controller');

app.get('/',
    function (req, res) {
        res.send('Hello World');
    });

app.get('/movies',MovieSearchByName);
app.get('/moviesUpcoming',getUpcomingMovies)
app.get('/moviesRated', getTopRatedMovies);
app.get('/moviesPopular', getPopularMovies);
app.listen(PORT);