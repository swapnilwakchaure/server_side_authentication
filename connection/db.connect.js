require('dotenv').config();
const mongoose = require("mongoose");


const connection = mongoose.connect(process.env.mongdbURL)
    .then(() => console.log("Successfuyll connected to the database!"))
    .catch((error) => console.log(error))


module.exports = { connection };    