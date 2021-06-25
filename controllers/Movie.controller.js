"user strict";

const { default: axios } = require('axios');
const movieModel = require('../models/UserMovies.model')

const getLatestMovies = async (request, response) => {
    await axios.get('https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US').then.
        if(error) {
        response.send(error.message);
    }
        else {
    response.json(user);
}
}
