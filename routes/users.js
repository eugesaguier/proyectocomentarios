var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/register', usersController.register);
router.get('/login',usersController.login);
router.get("/profile-edit",usersController.profileEdit)
router.get("/profile",usersController.profile);
router.get("/:id", usersController.user);

module.exports = router;
