var express = require('express');
var router = express.Router();
let productController = require("../controllers/productController")

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;