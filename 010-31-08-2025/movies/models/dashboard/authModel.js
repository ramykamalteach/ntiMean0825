const { MongoClient, ObjectId, mongoConnection } = require('../mongodbConnection.js');

const { hash } = require("bcrypt");


//import { hash as _hash } from "bcrypt";

async function storeUser(signupFormData) {

    const fullname = signupFormData.fullname;
    const username = signupFormData.username;
    const userRole = signupFormData.userRole;

    return new Promise((resolve, reject) => {
        hash(signupFormData.password, 11, async (err, hash) => {
            if (err) {
                //
            }
            else {
                // hash
                const user = {
                    fullname: fullname,
                    username: username,
                    password: hash,
                    userRole: userRole,
                    isActive: true
                }
                const client = await MongoClient.connect(mongoConnection);
                const db = client.db();

                await db.collection("users").insertOne(user, function (err, res) {
                    if (err) throw err;
                    client.close();
                    return { "operation": "success" };
                });
            }
        });

    });
}


async function verifySignin(signinForm) {
    const username = signinForm.username;

    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();

    user = await db.collection("users").find({ username: username }).limit(1).toArray();

    return user;
}


module.exports = {
    storeUser,
    verifySignin
}