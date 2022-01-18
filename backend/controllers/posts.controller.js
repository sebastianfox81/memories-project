const postsCtrl = {};

const Post = require('../models/Post')
// GET ALL POSTS
postsCtrl.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}
// CREATE NEW POST
postsCtrl.createPost = async (req, res ) => {
  // console.log(req.file)
  const { title, msg, creator, tags, likes, createdAt } = req.body;
  // const selectedFile = req.file.path

  const newPost = new Post({
    title, msg, creator, tags, likes, createdAt
  });

  try {
    await newPost.save();
    res.status(200).json({ msg: 'New post created!'})
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}
// GET ONE POST
postsCtrl.getOnePost = async (req, res) => {
  try {
    const note = await Post.findById(req.params.id);
    res.json(note)
  } catch (err) {
    res.status(400).json({ msg: err.message})
  }
}
// UPDATE POST
postsCtrl.updatePost = async (req, res) => {
  const { title, msg, creator, tags, likes } = req.body;
  const updatedNote = { title, msg, creator, tags, likes }
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, updatedNote, { new: true });
    res.status(200).json({ msg: 'Post successfully updated!'})
    console.log(updatedPost)
  } catch (err) {
    res.status(400).json({ msg: err.message})
  }
}
// REMOVE POST
postsCtrl.removePost = async (req, res) => {
  try {
  await Post.findByIdAndDelete(req.params.id)
  res.status(200).json({ msg: 'Post removed successfully'})
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

module.exports = postsCtrl;