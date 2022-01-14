const router = require('express').Router();

const { getAllPosts, createPost } = require('../controllers/posts.controller')

router.route('/')
  .post(createPost)
  .get(getAllPosts)

router.route('/:id')
  .get()
  .delete()

module.exports = router;