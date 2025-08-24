const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongoConnection = process.env.MONGODB_CONNECTION;

module.exports = {
    mongoose,
    Schema,
    mongoConnection,
};