const Product = require('./../models/Product.js');
module.exports.viewAllProducts = (req, res) => 
	res.send({
		Name: req.body.Name,
		Description: req.body.Description,
		Price: req.body.Price
	});
module.exports.viewSingleProduct = (req, res) => 
	res.send({
		Name: req.body.Name,
		Description: req.body.Description,
		Price: req.body.Price
	});
module.exports.createProduct = (req, res) => {
	let newProduct = new Product({
		Name: req.body.Name,
		Description: req.body.Description,
		Price: req.body.Price
	});

	newProduct.save().then( product => res.send(product)).catch( err => res.send(err.message));
}
	
module.exports.updateProduct = (req, res) => 
	res.send({
		Name: req.body.Name,
		Description: req.body.Description,
		Price: req.body.Price
	});	
module.exports.archiveProduct = (req, res) => 
	res.send({isActive: false});