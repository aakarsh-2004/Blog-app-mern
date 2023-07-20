const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String
})

const blogModel = mongoose.model('blog', blogSchema);

module.exports = blogModel;