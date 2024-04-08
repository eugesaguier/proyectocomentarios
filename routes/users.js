var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController')
router.get('/', usersController)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res){
  return res.send('hola index')
})

module.exports = router;