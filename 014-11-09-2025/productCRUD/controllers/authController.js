const authModel = require("../models/authModel");
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');


const signup = (req, res) => {
    
    authModel.checkUserNameDuplication(req.body.userName)
        .then(oneUser => {
            if (oneUser.length != 0) {
                return res.status(409).json({ errors: 'user name reserved .' });
            }
            else {
                authModel.signup(req.body)
                    .then(err => {
                        //
                    });
                return res.status(200).json({ register: 'done' });
            }
        });
}


const signin = (req, res) => {
    
    authModel.signin(req.body)
        .then(users => {
            if (users.length == 0) {
                return res.status(401).json({ login: 'failed, no user name valid' });
            }
            else {
                bcrypt.compare(req.body.password, users[0].password, function (err, result) {
                    if (err) {
                        //
                    }
                    if (result) {
                        // success sign in
                        const payload = {
                            userId: users[0]._id,
                            fullname: users[0].fullName,
                            role: users[0].role
                        };

                        const secretKey = process.env.JWT_SECRET_KEY;

                        const token = jwt.sign(payload, secretKey, { expiresIn: '300d' }); // 6000 = 6sec , 1d , 1h

                        return res.status(200).json({ login: 'done', token: token, role: users[0].role });
                    }
                    else {
                        return res.status(401).json({ login: 'failed, no password valid' });
                    }
                });
            }
        });
}


const verifySignin = (req, res, next) => {

    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const secretKey = process.env.JWT_SECRET_KEY;
        var decodedToken = jwt.verify(token, secretKey);
    } catch (error) {
        return res.status(401).json({ login: 'failed, no or Wrong token sent' });
    }

    const id = decodedToken.userId;
    const fullname = decodedToken.fullname;
    const role = decodedToken.role;

    req.user = { id, fullname, role };

    authModel.verifySignin(id, role)
        .then(users => {
            if (users.length == 0) {
                return res.status(401).json({ login: 'failed, no user with this ID or Role' });
            }
            else {
                next();
            }
        });
}


module.exports = {
    signup,
    signin,
    verifySignin
}