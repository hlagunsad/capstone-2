module.exports.register = (req, res) => 
	res.send(`Here you will register`);
module.exports.login = (req, res) => 
	res.send(`Here you will login`);
module.exports.setToAdmin = (req, res) => 
	res.send(`Admin Only. Set another admin ${req.params.userId}`);