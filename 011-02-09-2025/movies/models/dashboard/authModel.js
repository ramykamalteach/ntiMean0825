const { MongoClient, ObjectId, mongoConnection } = require('../mongodbConnection.js');
const bcrypt = require("bcrypt");
const { hash } = require("bcrypt");


//import { hash as _hash } from "bcrypt";

async function storeUser(signupFormData) {
    const { fullname, username, userRole, password } = signupFormData;

    return new Promise((resolve, reject) => {
        hash(password, 11, async (err, hashedPassword) => {
            if (err) {
                return reject({ operation: "failed", error: err });
            }

            try {
                const user = {
                    fullname,
                    username,
                    password: hashedPassword,
                    userRole,
                    isActive: true
                };

                const client = await MongoClient.connect(mongoConnection);
                const db = client.db();

                const result = await db.collection("users").insertOne(user);
                client.close();

                if (result.insertedId) {
                    resolve({ operation: "success", userId: result.insertedId });
                } else {
                    reject({ operation: "failed" });
                }
            } catch (dbError) {
                reject({ operation: "failed", error: dbError });
            }
        });
    });
}


async function verifySignin(signinForm) {
    const username = signinForm.username;

    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();

    user = await db.collection("users").find({ username: username, isActive: true }).limit(1).toArray();

    return user;
}



async function changePassword(changePasswordForm, userId) {
    const { oldPassword, newPassword } = changePasswordForm;

    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();

    const user = await db
        .collection("users")
        .find({ _id: new ObjectId(String(userId)) })
        .limit(1)
        .toArray();

    if (user.length === 0) {
        return { operation: "failed", msg: "User not found" };
    }

    // check old password
    const match = await bcrypt.compare(oldPassword, user[0].password);
    if (!match) {
        return { operation: "failed", msg: "Old password not matched" };
    }

    // hash new password
    const hashed = await bcrypt.hash(newPassword, 11);

    await db.collection("users").updateOne(
        { _id: new ObjectId(String(userId)) },
        { $set: { password: hashed } }
    );

    return { operation: "success", msg: "Password changed successfully" };
}


module.exports = {
    storeUser,
    verifySignin,
    changePassword,
}