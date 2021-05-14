const router = require('express').Router();
const {register,
	login,
	setToAdmin } = require('./../controllers/userControllers.js')
const User = require('./../models/User.js');
const {verify, verifyAdmin} = require('./../auth.js');

router.post('/', register);
router.get('/login', login);
router.put('/:userId', verify, verifyAdmin, setToAdmin);
module.exports = router;