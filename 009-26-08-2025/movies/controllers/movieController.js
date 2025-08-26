const movieModel = require("../models/movieModel");
const path = require("path");


/* const index = (req, res) => {
    movieModel.index()
        .then(movies => {
            res.render("pages/movies/index", { movies });
        });
} */

const index = (req, res) => {
    movieModel.index(req)
        .then(movies => {
            res.render("pages/movies/index", { movies });
        });
}

const show = (req, res) => {
    const id = req.params['id'];
    movieModel.show(id)
        .then(oneMovie => {
            res.render("pages/movies/show", { oneMovie });
        })
        .catch(err => {
            let oneMovie = [];
            res.render("pages/movies/show", { oneMovie });
            /* res.status(500).send("Error retrieving movie: " + err.message); */
        });
}


const searchMovie = (req, res) => {

    movieModel.searchMovie(req.body)
        .then(movies => {
            res.render("pages/movies/index", { movies });
        });
}

const searchMovieGenres = (req, res) => {
    const movieGenres = req.params['movieGenres'];
    movieModel.searchMovieGenres(movieGenres)
        .then(movies => {
            res.render("pages/movies/index", { movies });
        });
}

module.exports = {
    index,
    show,
    searchMovie,
    searchMovieGenres,
}