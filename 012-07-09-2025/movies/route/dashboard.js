const express = require('express');
const dashboardRouter = express.Router();
const app = express();

/* ----------- controllers -------------------- */

const authController = require("../controllers/dashboard/authController");
const accountController = require("../controllers/dashboard/accountController");
const movieManageController = require("../controllers/dashboard/movieManageController");

/* -------------- not auth pages ------------------- */
dashboardRouter.get('/signup', (req, res) => {
    authController.signup(req, res);
});

/* dashboardRouter.post('/storeUser', (req, res) => {
    authController.storeUser(req, res);
}); */

dashboardRouter.get('/signin', (req, res) => {
    authController.signin(req, res);
});

dashboardRouter.post('/verifySignin', (req, res) => {
    authController.verifySignin(req, res);
});

dashboardRouter.get('/logout', (req, res) => {
    authController.logout(req, res);
});

/* ------- auth --------- */
dashboardRouter.use(authController.isAuthenticated);


/* ********** dashboard ************* */
dashboardRouter.get('/dashboard/index', authController.hasRole(["admin", "user"]),(req, res) => {
    const msg = req.query.msg;
    res.render("../views/dashboard/index.ejs", {msg});
});

dashboardRouter.get('/dashboard/manageAccounts', authController.hasRole(["admin"]),(req, res) => {
    accountController.index(req, res);
});

dashboardRouter.get('/dashboard/createAccountForm', authController.hasRole(["admin"]),(req, res) => {
    const msg = req.query.msg;
    res.render("../views/dashboard/pages/createAccountForm.ejs", {msg});
});

dashboardRouter.post('/storeUser', authController.hasRole(["admin"]),(req, res) => {
    authController.storeUser(req, res);
});

dashboardRouter.get('/dashboard/accountActivation', authController.hasRole(["admin"]),(req, res) => {
    accountController.accountActivation(req, res);
});

dashboardRouter.get('/dashboard/changePassword', authController.hasRole(["admin", "user"]),(req, res) => {
    const msg = req.query.msg;
    res.render("../views/dashboard/pages/changePassword.ejs", {msg});
});

dashboardRouter.post('/dashboard/changePassword', authController.hasRole(["admin", "user"]),(req, res) => {
    authController.changePassword(req, res);
});

dashboardRouter.get('/dashboard/suggestedMovies', authController.hasRole(["admin"]),(req, res) => {
    movieManageController.suggestedMovies(req, res);
});

dashboardRouter.get('/dashboard/viewMovieDetails', authController.hasRole(["admin"]),(req, res) => {
    movieManageController.viewMovieDetails(req, res);
});

dashboardRouter.post('/dashboard/reviewMovieDecision', authController.hasRole(["admin"]),(req, res) => {
    movieManageController.reviewMovieDecision(req, res);
});

/* ----------------- for users ---------------------- */
dashboardRouter.get('/dashboard/userAddNewMovie', authController.hasRole(["user"]),(req, res) => {
    const msg = req.query.msg;
    res.render("../views/dashboard/pages/userAddNewMovie.ejs", { msg });
});

dashboardRouter.post('/dashboard/userAddNewMovie', authController.hasRole(["user"]),(req, res) => {
    movieManageController.userAddNewMovie(req, res);
});


/* ----------- 404 handler for dashboard only ------------------ */
dashboardRouter.use((req, res) => {
    res.status(404).render("../views/dashboard/pages/404.ejs");
});


module.exports = dashboardRouter;