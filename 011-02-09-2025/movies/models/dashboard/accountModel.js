const { MongoClient, ObjectId, mongoConnection } = require('../mongodbConnection.js');
const bcrypt = require("bcrypt");
const { hash } = require("bcrypt");

async function index(req) {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();
    const users = await db.collection("users").find().toArray();
    client.close();
    return users;
}

async function accountActivation(userId, status) {
    const client = await MongoClient.connect(mongoConnection);
    const db = client.db();
    
    if(status=="active"){
        status = false;
    } else{
        status = true;
    }
    await db.collection("users").updateOne({ _id: new ObjectId(String(userId)) }, { $set: { isActive: status } });
    client.close();
    return;
}

module.exports = {
    index,
    accountActivation,
}