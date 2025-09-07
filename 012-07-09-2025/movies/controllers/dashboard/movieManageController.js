const movieManageModel = require("../../models/dashboard/movieManageModel");

const userAddNewMovie = (req, res) => {
    const userId = req.session.userID;
    const userFullName = req.session.fullname;
    movieManageModel.userAddNewMovie(userId, userFullName, req.body)
        .then(result => {
            const msg = "New Movie Added, Now under Review";
            res.redirect("/dashboard/index" + "?msg=" + msg);
        });
}


const suggestedMovies = (req, res) => {
    const msg = req.query.msg;
    movieManageModel.suggestedMovies(req)
        .then(movies => {
            res.render("../views/dashboard/pages/suggestedMovies", { movies, msg });
        });
}

const viewMovieDetails = (req, res) => {
    movieManageModel.viewMovieDetails(req)
        .then(movie => {
            res.render("../views/dashboard/pages/movieDetails", { movie });
        });
}

const reviewMovieDecision = (req, res) => {
    movieManageModel.reviewMovieDecision(req)
        .then(movie => {            
            let msg = "Movie decision updated.";
            if(movie.status == "approved") {
                msg = "Movie Approved.";
            }
            else {
                msg = "Movie Rejected.";
            }
            res.redirect("/dashboard/suggestedMovies" + "?msg=" + msg);
        });
}

module.exports = {
    userAddNewMovie,
    suggestedMovies,
    viewMovieDetails,
    reviewMovieDecision,
}