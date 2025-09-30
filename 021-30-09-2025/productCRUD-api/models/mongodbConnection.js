const { MongoClient, ObjectId } = require('mongodb');

const mongoConnection = process.env.MONGODB_CONNECTION;

module.exports = {
    MongoClient,
    ObjectId,
    mongoConnection,
};