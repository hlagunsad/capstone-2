const router = require('express').Router();
const {register, login, setToAdmin} = require('./../controllers/userControllers.js')

router.post('/api/users', register);
router.get('/api/users/login', login);
router.put('/api/users/:userId', setToAdmin);
module.exports = router;