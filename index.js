require('dotenv').config();
const express = require("express");
const cors = require("cors");
const port = process.env.port;

const { connection } = require("./connection/db.connect");

const app = express();

app.use(
    cors({
        origin: ["http://localhost:8080"],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true
    })
);

app.use(express.json());

app.listen(port, async() => {
    try {
        await connection
        console.log(`Server is running at port ${port}!`);
    }
    catch(error) {
        console.log(error);
    }
});
