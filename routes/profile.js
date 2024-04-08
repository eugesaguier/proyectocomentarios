var express = require('express');
var router = express.Router();

const profileController = require('../controllers/profileController')
router.get('/', profileController)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res){
  return res.send('hola index')
})


module.exports = router;