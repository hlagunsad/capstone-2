const router = require('express').Router();
const {register,
	login,
	setToAdmin } = require('./../controllers/userControllers.js')
const User = require('./../models/User.js');

router.post('/', register);
router.get('/login', login);
router.put('/:userId', setToAdmin);
module.exports = router;