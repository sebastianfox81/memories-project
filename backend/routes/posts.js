const router = require('express').Router();

const { getAllPosts } = require('../controllers/posts.controller')

router.route('/')
  .post()
  .get(getAllPosts)

router.route('/:id')
  .get()
  .delete()

module.exports = router;