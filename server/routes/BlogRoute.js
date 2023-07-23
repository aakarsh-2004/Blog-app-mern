const express = require('express')
const app = express();
const router = express.Router();
const BlogModel = require('../models/BlogModel');
app.use(express.json());

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


router.get('/post/:id', async (req, res, next) => {
    const {id} = req.params;
    const blogDetails = await BlogModel.findById(id);
    res.json(blogDetails);
})

router.patch('/update/:id', async (req, res, next) => {
    const {title, description, link} = req.body;
    const {id} = req.params
    try {
        const response = await BlogModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(response)
    } catch (error) {
        res.json(`Error updating ${error}`);
    }
})


router.get('/getpost/:id', async (req, res, next) => {
    const {id} = req.params;
    const response = await BlogModel.findById(id);
    res.json(response);
})


router.delete('/post/delete/:id', async (req, res, next) => {
    const {id} = req.params;
    try {
        const response = await BlogModel.findByIdAndDelete(id);
        res.json(response);
    } catch (error) {
        res.json(`Error deleting the blog, ${error}`);
    }
})

module.exports = router;