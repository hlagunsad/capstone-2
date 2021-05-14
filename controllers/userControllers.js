const User = require('./../models/User.js');

module.exports.register = (req, res) => 
	{
		if (req.body.password.length < 8)
			res.send(`password needs to be minimum of eight characters`);
		else {
			if (req.body.confirmPassword !== req.body.password )
			res.send(`Your password didn't match.`);
			else {
				User.create(
					{
						firstName: req.body.firstName,
						lastName: req.body.lastName,
						email: req.body.email,
						mobileNo: req.body.mobileNo,
						password: req.body.password
					}).then( user => res.send(user)).catch( err => res.send(err.message));
			}
		}
	}

module.exports.login = (req, res) => 
	{
		User.findOne({email: req.body.email}).then( user => 
			{
				if (!user)
					res.send(`Login details (email) not found.`)
				else{
					if (req.body.password !== user.password)
						res.send(`Wrong password.`);
					else
						res.send(`Login successful.`)
				}
			}).catch( err => res.send(err.message))
	}

module.exports.setToAdmin = (req, res) => {
	let adminUser = { isAdmin: true }
	User.findByIdAndUpdate(req.params.userId, adminUser, {strict: true}).then( user => res.send(`User is now set to admin: ${user.isAdmin}`)).catch( err => res.send(err.message));
}

