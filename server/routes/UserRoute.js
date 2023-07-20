const express = require('express')
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const secret = 'sadnaeh123139109nqkwdnqd/df12321dsaf';
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

router.post('/register', async (req, res, next) => {
    const {name, email, password} = req.body;
    const saltRounds = 10;
    await bcrypt.hash(password, saltRounds, async (err, hashed) => {
        if (err) {
            res.json("There was an error hashing");
        } else {
            const userAdded = await UserModel.create({
                name: name,
                email: email,
                password: hashed
            })
            res.status(201).json(userAdded);
        }
    })
});

router.post('/login', async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const data = await UserModel.findOne({email});
        const hashedPassword = data.password;
        const result = await bcrypt.compare(password, hashedPassword);
        if (result) {
            jwt.sign({email, id: data._id}, secret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token, {}).json({
                    id: data._id,
                    email,
                });
            })
            res.json("Logged in!")
        } else {
            res.status(400).json("Wrong credentials");
        }
    } catch (error) {
        console.log(`Something wrong the login ${error}`);
    }
})

router.get('/profile', (req, res, next) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) {
            console.log('Error while verifying token',err);
        } else {
            res.json(info);        }
    });
});

module.exports = router;