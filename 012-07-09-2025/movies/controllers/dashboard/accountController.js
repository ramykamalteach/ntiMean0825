const accountModel = require("../../models/dashboard/accountModel");
const bcrypt = require("bcrypt");

const index = (req, res) => {
    const msg = req.query.msg;
    accountModel.index(req)
        .then(users => {
            res.render("../views/dashboard/pages/manageAccounts", { users, msg });
        });
}

const accountActivation = (req, res) => {
    const userId = req.query.userID;
    const status = req.query.status;
    accountModel.accountActivation(userId, status)
        .then(result => {
            res.redirect("/dashboard/manageAccounts?msg=Account status changed successfully");
        });
}


module.exports = {
    index,
    accountActivation,
}