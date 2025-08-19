const express = require('express');
const webRouter = express.Router();

/* ------------- controllers ------------------- */
const staffController = require('../controllers/staffController');
/* -------------- route roles ------------------------ */
webRouter.get('/', (req, res) => {
    res.render('pages/home');
});

webRouter.get('/staff', (req, res) => {
    webRouter.get('/staff', staffController(req, res));
});

// add more route roles

module.exports = webRouter;