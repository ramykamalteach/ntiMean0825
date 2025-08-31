const authModel = require("../../models/dashboard/authModel");
const bcrypt = require("bcrypt");



const signup = (req, res) => {
    const msg = req.query.msg;
    res.render("../views/dashboard/signup.ejs", { msg });
}

const storeUser = (req, res) => {

    if (req.body.password == req.body.confirmPassword) {
        authModel.verifySignin(req.body)
            .then(users => {
                if (users.length != 0) {
                    res.redirect("/signup?msg=username already exists !!!");
                }
                else {
                    authModel.storeUser(req.body)
                        .then(err => {
                            //
                        });
                    res.redirect("/signin?registerComplete=You register successfully");
                }
            });
    }
    else {
        res.redirect("/signup?msg=password and confirmed password not matched"); // ? parameters get type, name=value&name2=value2&.....
    }
}

const signin = (req, res) => {
    const registerComplete = req.query.registerComplete;
    const failed = req.query.failed;
    const logout = req.query.logout;
    res.render("../views/dashboard/signin.ejs", { registerComplete, failed, logout });
}

const verifySignin = (req, res) => {
    authModel.verifySignin(req.body)
        .then(users => {
            if (users.length == 0) {
                res.redirect("/signin?failed=No user name OR password matched !!!");
            }
            else {
                bcrypt.compare(req.body.password, users[0].password, function (err, result) {
                    if (err) {
                        //
                    }
                    if (result) {
                        // success sign in
                        req.session.userID = users[0]._id;
                        req.session.fullname = users[0].fullname;
                        req.session.userRole = users[0].userRole;
                        //console.log(req.session);
                        res.redirect("/dashboard/index");
                    }
                    else {
                        res.redirect("/signin?failed=No user name OR password matched !!!");
                    }
                });
            }
        });
}


const isAthu = (req, res, next) => {
    if (req.session.userRole == "admin") {
        res.locals.fullname = req.session.fullname;
        next();
    }
    else {
        res.redirect("/signin?failed=You are NOT authorized, Signin first.");
    }
}

const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            //
        }
        res.redirect("/signin?logout=You are signned out");
    });
}

module.exports = {
    signup,
    storeUser,
    signin,
    verifySignin,
    isAthu,
    logout,
}