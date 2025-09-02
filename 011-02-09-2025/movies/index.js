const express = require('express');
const session = require("express-session");
const app = express();
const path = require('path');
require('dotenv').config();

/* ------------- public folder ---------------- */
app.use(express.static(__dirname + '/public'));
/* ------------- view engine ------------------ */
app.set('view engine', 'ejs');
/* -------------- using form data -------------- */
app.use(express.urlencoded({extended: true}));
/* ------------- session ---------------------- */
app.use(session({
    secret: 'thisismyapplicationtoday',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 3, // three days to be expired
    }
}));
/* ------------- router ----------------------- */
const dashboardRouter = require('./route/dashboard');
app.use(dashboardRouter);
const webRouter = require('./route/web');
app.use(webRouter);

/* ---------------- start server --------------- */
port = process.env.PORT;
app.listen(port, () => {
    //
    console.log("server start at port " + port);
});