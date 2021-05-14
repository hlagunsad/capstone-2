const jwt = require('jsonwebtoken');
const passkey = "coursebookingapi";

module.exports.createAccessToken = (user) => {
	let payload = {
		id : user._id,
		email : user.email,
		isAdmin : user.isAdmin
	}
	return jwt.sign(payload, passkey);
	
}

module.exports.verify = (req, res, next) => {
	let token = req.headers.authorization;
	if(typeof token === "undefined")
		res.send({auth: "failed"});
	else{
		token = token.slice(7, token.length);
		jwt.verify(token, passkey, function(err, decoded) {
			if(err)
				res.send({auth: "failed"});
			else{
				req.user = decoded;
				next();
			} 
				
		});
	}
}

module.exports.verifyAdmin = (req, res, next) => {
	if (!req.user.isAdmin)
		res.send(false)
	else{
		next();
	}
}