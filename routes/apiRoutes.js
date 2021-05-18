const router = require('express').Router();

router.get('/api', (req, res) => {
	res.send('Open your Postman.')
});
module.exports = router;