const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

/* ------------- public folder ---------------- */
app.use(express.static(__dirname + '/public'));
/* ------------- view engine ------------------ */
app.set('view engine', 'ejs');
/* -------------- using form data -------------- */
app.use(express.urlencoded({extended: true}));
/* ------------- router ----------------------- */
const webRouter = require('./route/web');
app.use(webRouter);

/* ---------------- start server --------------- */
port = process.env.PORT;
app.listen(port, () => {
    //
    console.log("server start at port " + port);
});