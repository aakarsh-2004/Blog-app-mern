const express = require('express')
const app = express();
const router = express.Router();
const BlogModel = require('../models/BlogModel');


router.post('/create', async (req, res, next) => {
    const {title, description, link} = req.body;
    try {
        const blogAdded = await BlogModel.create({
            title: title,
            description: description,
            link: link
        });
        res.status(201).json(blogAdded);
    } catch (error) {
        res.json(`Error creating the blog ${error}`);
    }
    
});

router.get('/blogs', async (req, res, next) => {
    const blogs = await BlogModel.find();
    res.json(blogs);
})

module.exports = router;