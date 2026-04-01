var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('unicycles', { title: 'Search Results Unicycles' });
});

module.exports = router;