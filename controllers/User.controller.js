
const { movieModel } = require('../models/UserMovies.model');
const {seedUserModel}=require('../models/UserMovies.model')


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
            if(userData.length === 0){
                seedUserModel(email);
                res.send('potato');
            }
            else{
              console.log("email found");
            res.send(userData);   
             
            }
           
        }
    })
}

const createFavorite = (req, res) => {
    const  email = req.body.email;
        const Movie  = req.body.Movie;
    console.log(req.body);
    movieModel.findOne({ email: email }, (error, userData) => {
        if (error) {
           
           res.send(error);
        }
        else{
            console.log(userData.favMovie);
            userData.favMovie.push(Movie);
            userData.save();
            res.send(userData);
        }
    })
}

const createToWatch = (req, res) => {
    const  email = req.body.email;
        const Movie  = req.body.Movie;
    console.log(req.body);
    movieModel.findOne({ email: email }, (error, userData) => {
        if (error) {
           
           res.send(error);
        }
        else{
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
    console.log(req.params);

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
module.exports={createUser , getUsers , createFavorite , createToWatch ,deleteFav , deleteToWatch};