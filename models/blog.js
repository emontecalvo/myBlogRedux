const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title: String,
    content: String,
    tags: Array,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', BlogSchema)
