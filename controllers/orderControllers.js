const Order = require('./../models/Order.js');
const Product = require('./../models/Product.js');

module.exports.createOrder = (req, res) => {
	let orderProductId = req.body.products.map( obj => obj.productId);
	Product.find({_id: {$in:orderProductId}})
		.then( product => {
			let productPrice = product.map( obj => obj.Price)
			let orderArray = productPrice.map((prices, index) => ({...req.body.products[index], Price: prices}))
			let arrProducts = orderArray.map( obj => Object.assign(obj, {subtotal: obj.quantity*obj.Price}))			
			let subTotal = arrProducts.map( obj => obj.subtotal)
			let totalAmt = (total, num) => total+num;
			let newOrder = new Order({
				totalAmount: subTotal.reduce(totalAmt),
		    	userId: req.user.email,
				products: arrProducts 
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
