const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config();

const PORT = process.env.PORT;



app.use(cors());
app.use(express.json());


app.get('/',
    function (req, res) {
        res.send('Hello World');
    });

app.listen(PORT);