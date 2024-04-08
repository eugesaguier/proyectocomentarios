var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')
router.get('/', indexController.mostrar)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res){
  return res.send('hola index')
})

module.exports = router;