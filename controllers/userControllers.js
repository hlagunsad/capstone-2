const User = require('./../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passkey = "ecommerceapi";
const {createAccessToken} = require('./../auth.js')

module.exports.register = (req, res) => 
	{
		if (req.body.password.length < 8)
			res.send(`Your password needs to be minimum of eight characters.`);
		else {
			if (req.body.confirmPassword !== req.body.password )
			res.send(`Your password didn't match.`);
			else {
				const hash = bcrypt.hashSync(req.body.password, 2);
				User.create(
					{
						firstName: req.body.firstName,
						lastName: req.body.lastName,
						email: req.body.email,
						mobileNo: req.body.mobileNo,
						password: hash
					})
				.then( user => res.send(user, {password:0}))
				.catch( err => res.send(err.message));
			}
		}
	}

module.exports.login = (req, res) => 
	{
		User.findOne({email: req.body.email})
		.then( user => 
			{
				if (!user)
					res.send(`Login details (email) not found.`)
				else{
					let matchedPW = bcrypt.compareSync(req.body.password, user.password);
					if (!matchedPW)
						res.send(`Wrong password.`);
					else {
						res.send({auth: createAccessToken(user)});
					}
				}
			})
		.catch( err => res.send(err.message))
	}

module.exports.setToAdmin = (req, res) => {
	let adminUser = { isAdmin: req.body.isAdmin }
	User.findByIdAndUpdate(req.params.userId, adminUser, {strict: true})
	.then( user => {
		if (req.body.isAdmin === false)
			res.send(`${req.user.email} is now set to normal User.`)
		else 
			res.send(`${req.user.email} is now set to admin.`)
	})
	.catch( err => res.send(err.message))
}

module.exports.editProfile = (req, res) => {
	// let userProfile = { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, mobileNo: req.body.mobileNo}
	User.findByIdAndUpdate(req.params.userId, {$set:req.body})
	.select({password: 0})
	.then( user => {
		if (user.email !== req.user.email)
			res.send(`You're not logged in to your correct account`);
		else if (req.body.isAdmin === true || req.body.isAdmin === false)
			res.send(`Invalid`)
		else
			res.send(user);
	})
	.catch( err => res.send(err.message));
}

