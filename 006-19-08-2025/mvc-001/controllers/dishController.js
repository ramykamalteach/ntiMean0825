const dishModel = require('../models/dishModel');

const dishController = (req, res) => {    
    res.render('pages/dishes', {
        dishes: dishModel().dishes
    });
}

module.exports = dishController;