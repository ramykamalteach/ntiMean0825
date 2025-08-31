const productModel = require("../models/productModel");
const path = require("path");
const {unlink} = require("fs");

const index = (req, res) => {
    productModel.index()
        .then(products => {
            res.render("pages/products/index", { products });
        });
}

const show = (req, res) => {
    const id = req.params['id'];
    productModel.show(id)
        .then(oneProduct => {
            res.render("pages/products/show", { oneProduct });
        });
}

const createForm = (req, res) => {
    res.render("pages/products/createForm");
}

const store = (req, res) => {
   // validation
    if(req.file != undefined) {
        req.body.photo = req.file.filename;
    }
    else {
        req.body.photo = "";
    }

   //////////////////
   productModel.store(req.body)
        .then(error => {
            //
        });
    res.redirect("/products");
}

const updateForm = (req, res) => {
    const id = req.params['id'];
    productModel.updateForm(id)
        .then(oneProduct => {
            res.render("pages/products/updateForm", { oneProduct });
        });
}

const update = (req, res) => {
    // validation

    const id = req.body.id;
    productModel.updateForm(id)
        .then(oneProduct => {
            if(oneProduct.length != 0){
                if(req.file != undefined){
                    if(oneProduct[0].photo != "") {
                        const publicPath = path.resolve("./", "public/img/uploades");
                        unlink(path.join(publicPath, oneProduct[0].photo), (err) => {
                            if(err) {
                                throw err;
                            }
                        });
                    }
                    req.body.photo = req.file.filename;
                    productModel.update(req.body)
                        .then(error => {
                            //
                        });
                    res.redirect("/products");
                }
                else {
                    req.body.photo = "";
                    productModel.update(req.body)
                        .then(error => {
                            //
                        });
                    res.redirect("/products");
                }
            }
        });
}

const destroy = (req, res) => {
    const id = req.params['id'];
    productModel.updateForm(id)
        .then(oneProduct => {
            if(oneProduct.length != 0){                
                if(oneProduct[0].photo != "") {
                    const publicPath = path.resolve("./", "public/img/uploades");
                    unlink(path.join(publicPath, oneProduct[0].photo), (err) => {
                        if(err) {
                            throw err;
                        }
                    });
                }                    
                productModel.destroy(id)
                    .then(error => {
                        //
                    });
                res.redirect("/products");
            }
        });    
}

module.exports = {
    index,
    show,
    createForm,
    store,
    updateForm,
    update,
    destroy
}