const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    msg: { type: String, required: true},
    creator: { type: String, unique: true, required: true},
    tags: { type: String},
    selectedFile: { type: String },
    likes: { type: Number, default: 0},
    createdAt: { type: Date, default: new Date() }
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;