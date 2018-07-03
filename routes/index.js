var express = require('express');
var router = express.Router();

/* GET home page - using new catalog routes that uses controllers */
router.get('/', function(req, res) {
    res.redirect('/catalog');
  });

module.exports = router;