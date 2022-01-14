const router = require('express').Router();

router.route('/')
  .post()
  .get()

router.route('/:id')
  .get()
  .delete()

module.exports = router;