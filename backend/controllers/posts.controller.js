const postsCtrl = {};

const Post = require('../models/Post')

postsCtrl.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}

postsCtrl.createPost = (req, res ) => {

  const { title, msg, creator, tags, selectedFile, likes, createdAt } = req.body;

  const newPost = new Post({
    title, msg, creator, tags, selectedFile, likes, createdAt
  });

  try {
    newPost.save();
    res.status(200).json({ msg: 'New post created!'})
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

module.exports = postsCtrl;