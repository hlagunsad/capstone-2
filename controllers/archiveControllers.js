const Product = require('./../models/Product.js');

module.exports.viewInactiveProducts = (req, res) => 
	Product.find({isActive:false}).then( product => res.send(product)).catch( err => res.send(err))
