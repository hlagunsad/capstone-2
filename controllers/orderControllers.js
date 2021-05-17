const Order = require('./../models/Order.js');
const Product = require('./../models/Product.js');

module.exports.createOrder = (req, res) => {
	// let arrQuantity = req.body.products.map( obj => obj.quantity);
	let orderProductId = req.body.products.map( obj => obj.productId);
	Product.find({_id: {$in:orderProductId}})
		.then( product => {
			let arrPrice = product.map( obj => obj.Price)
			let totalAmt = (total, num) => total+num;
			let newOrder = new Order({
				totalAmount: arrPrice.reduce(totalAmt),
		    	userId: req.user.email,
				products: req.body.products
			})
			return newOrder.save()
		})
		.then( order => res.send(order))
		.catch( err => res.send(err.message));
}
	
module.exports.myOrders = (req, res) => {
	Order.find({userId: req.user.email}).then( order => res.send(order)).catch( err => res.send(err))
}
	
module.exports.allOrders = (req, res) => 
	Order.find().then( order => res.send(order)).catch( err => res.send(err))


// Object.assign(...order.product, {subtotal: 1})