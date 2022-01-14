const router = require('express').Router();

const { getAllPosts, createPost, getOnePost, updatePost, removePost } = require('../controllers/posts.controller')

router.route('/')
  .post(createPost)
  .get(getAllPosts)

router.route('/:id')
  .get(getOnePost)
  .put(updatePost)
  .delete(removePost)

module.exports = router;