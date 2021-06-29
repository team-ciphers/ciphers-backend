"user strict";

const { default: axios } = require('axios');
const { response } = require('express');
const { Movie } = require('../models/Movies.model')

const getTopRatedMovies = async (req, res) => {
    await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`).then(response => {
        const arrOfMovies = [];
        response.data.results.map(item => {
            let imageURL = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
            let movieObject = new Movie(item.title, item.overview, item.release_date, item.vote_average, imageURL, item.id);
            arrOfMovies.push(movieObject);
            console.log(arrOfMovies);
        })
        res.send(arrOfMovies);
    })
        .catch(error => {
            res.send('Error hahahahahaha  ', error.message);
        })
}

const getPopularMovies = async (req, res) => {
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`).then(response => {
        const arrOfMovies = [];
        response.data.results.map(item => {
            let imageURL = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
            let movieObject = new Movie(item.title, item.overview, item.release_date, item.vote_average, imageURL, item.id);
            arrOfMovies.push(movieObject);
            console.log(arrOfMovies);
        })
        res.send(arrOfMovies);
    })
        .catch(error => {
            res.send('Error hahahahahaha  ', error.message);
        })
}

const MovieSearchByName = (req, res) => {
    let MovieName = req.query.movie
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${MovieName}`).then(response => {
        const arrOfMovies = [];
        response.data.results.map(item => {
            let imageURL = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
            let movieObject = new Movie(item.title, item.overview, item.release_date, item.vote_average, imageURL, item.id);
            arrOfMovies.push(movieObject);
        });
        res.send(arrOfMovies);
    })
        .catch(error => {
            res.send('Error hahahahahaha  ', error.message);
        });
}

const getUpcomingMovies = async (req, res) => {
    await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`).then(response => {
        const arrOfMovies = [];
        response.data.results.map(item => {
            let imageURL = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
            let movieObject = new Movie(item.title, item.overview, item.release_date, item.vote_average, imageURL, item.id);
            arrOfMovies.push(movieObject);
            console.log(arrOfMovies);
        })
        res.send(arrOfMovies);
    })
        .catch(error => {
            res.send('Error hahahahahaha  ', error.message);
        })
}


const getTrailer = (req, res) => {
    const { movieId } = req.query;
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.MOVIE_API_KEY}`).then(response => {
        const trailerURL = `https://www.youtube.com/embed/${response.data.results[0].key}`
        res.send(trailerURL)
    })
        .catch(error => {
            res.send('Error hahahahahaha  ', error.message);
        });
}

module.exports = { getTopRatedMovies, getPopularMovies, MovieSearchByName, getUpcomingMovies, getTrailer };
