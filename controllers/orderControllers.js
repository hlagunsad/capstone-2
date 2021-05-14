module.exports.createOrder = (req, res) => 
	res.send({
		totalAmount: req.body.totalAmount,
		purchasedOn: req.body.purchasedOn,
		userId: req.body.userId,
		products: [
			{
			    productId: req.body.productId,
			    quantity: req.body.quantity,
			    subtotal: req.body.subtotal
		  	}
		]
	});
module.exports.myOrders = (req, res) => 
	res.send({
		totalAmount: req.body.totalAmount,
		purchasedOn: req.body.purchasedOn,
		userId: req.body.userId,
		products: [
			{
			    productId: req.body.productId,
			    quantity: req.body.quantity,
			    subtotal: req.body.subtotal
		  	}
		]
	});
module.exports.allOrders = (req, res) => 
	res.send({
		totalAmount: req.body.totalAmount,
		purchasedOn: req.body.purchasedOn,
		userId: req.body.userId,
		products: [
			{
			    productId: req.body.productId,
			    quantity: req.body.quantity,
			    subtotal: req.body.subtotal
		  	}
		]
	});	
