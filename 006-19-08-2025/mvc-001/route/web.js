const express = require('express');
const webRouter = express.Router();

/* ------------- controllers ------------------- */
const staffController = require('../controllers/staffController');
const dishController = require('../controllers/dishController');
/* -------------- route roles ------------------------ */
webRouter.get('/', (req, res) => {
    res.render('pages/home');
});

webRouter.get('/staff', (req, res) => {
    webRouter.get('/staff', staffController(req, res));
});

webRouter.get('/dishes', (req, res) => {
    webRouter.get('/dishes', dishController(req, res));
});

// add more route roles

module.exports = webRouter;