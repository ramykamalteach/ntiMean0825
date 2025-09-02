const express = require('express');
const dashboardRouter = express.Router();
const app = express();

/* ----------- controllers -------------------- */

const authController = require("../controllers/dashboard/authController");
const accountController = require("../controllers/dashboard/accountController");

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
dashboardRouter.use(authController.isAthu);


/* ********** dashboard ************* */
dashboardRouter.get('/dashboard/index', (req, res) => {
    const msg = req.query.msg;
    res.render("../views/dashboard/index.ejs", {msg});
});

dashboardRouter.get('/dashboard/manageAccounts', (req, res) => {
    accountController.index(req, res);
});

dashboardRouter.get('/dashboard/createAccountForm', (req, res) => {
    const msg = req.query.msg;
    res.render("../views/dashboard/pages/createAccountForm.ejs", {msg});
});

dashboardRouter.post('/storeUser', (req, res) => {
    authController.storeUser(req, res);
});

dashboardRouter.get('/dashboard/accountActivation', (req, res) => {
    accountController.accountActivation(req, res);
});

dashboardRouter.get('/dashboard/changePassword', (req, res) => {
    const msg = req.query.msg;
    res.render("../views/dashboard/pages/changePassword.ejs", {msg});
});

dashboardRouter.post('/dashboard/changePassword', (req, res) => {
    authController.changePassword(req, res);
});


module.exports = dashboardRouter;