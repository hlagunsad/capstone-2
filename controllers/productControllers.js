const Product = require('./../models/Product.js');
module.exports.viewAllProducts = (req, res) => 
	Product.find({isActive:true}).select({createdOn: 0, __v: 0, _id: 0}).then( product => res.send(product)).catch( err => res.send(err))

module.exports.viewSingleProduct = (req, res) => 
	Product.findById(req.params.prodId).then( product => res.send(product)).catch( err => res.send(err))
module.exports.createProduct = (req, res) => {
	let newProduct = new Product({
		Name: req.body.Name,
		Description: req.body.Description,
		Price: req.body.Price
	});

	newProduct.save().then( product => res.send(product)).catch( err => res.send(err.message));
}
	
module.exports.updateProduct = (req, res) => {
	let updatedProduct = {
		Name: req.body.Name,
		Description: req.body.Description,
		Price: req.body.Price
	}

	Product.findByIdAndUpdate(req.params.prodId, updatedProduct).then( product => res.send(product)).catch( err => {res.send(false)})
}

module.exports.archiveProduct = (req, res) => {
	let archivedProduct = {
		isActive: false
	}

	Product.findByIdAndUpdate(req.params.prodId, archivedProduct).then( product => res.send(product)).catch( err => {res.send(false)})
}

