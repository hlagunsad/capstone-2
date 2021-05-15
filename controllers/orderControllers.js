const Order = require('./../models/Order.js');

module.exports.createOrder = (req, res) => {
	let newOrder = new Order({
		totalAmount: req.body.products.length,
    	userId: req.user.email,
		products: req.body.products
	});

	newOrder.save().then( order => res.send(order)).catch( err => res.send(err.message));
}
	
module.exports.myOrders = (req, res) => {
	Order.find({userId: req.user.email}).then( order => res.send(order)).catch( err => res.send(err))
}
	
module.exports.allOrders = (req, res) => 
	Order.find().then( order => res.send(order)).catch( err => res.send(err))
