const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const upload = multer({ storage: storage })

const { getAllPosts, createPost, getOnePost, updatePost, removePost } = require('../controllers/posts.controller')

router.route('/')
  .get(getAllPosts);

router.post('/', upload.single('selectedFile'), createPost)

router.route('/:id')
  .get(getOnePost)
  .put(updatePost)
  .delete(removePost)

module.exports = router;