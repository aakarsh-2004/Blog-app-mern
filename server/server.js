const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const UserRoute = require('./routes/UserRoute.js');
const BlogRoute = require('./routes/BlogRoute.js');

const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(cookieParser());
dotenv.config();

mongoose
    .connect(process.env.URL)
    .then(() => {
        console.log(`Successfully connected to the database`);
        app.listen(port, () => {
            console.log(`Server started successfully on port ${port}`);
        })
    })
    .catch((err) => {
        console.log(`Error while connecting to the database ${err}`);
    });





app.use('/', UserRoute);
app.use('/', BlogRoute);