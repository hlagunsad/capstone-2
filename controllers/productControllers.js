module.exports.viewAllProducts = (req, res) => 
	res.send({
		Name: req.body.Name,
		Description: req.body.Description,
		Price: req.body.Price,
		isActive: true
	});
module.exports.viewSingleProduct = (req, res) => 
	res.send({
		Name: req.body.Name,
		Description: req.body.Description,
		Price: req.body.Price,
		isActive: true
	});
module.exports.createProduct = (req, res) => 
	res.send({
		Name: req.body.Name,
		Description: req.body.Description,
		Price: req.body.Price,
		isActive: true
	});	
module.exports.updateProduct = (req, res) => 
	res.send({
		Name: req.body.Name,
		Description: req.body.Description,
		Price: req.body.Price,
		isActive: true
	});	
module.exports.archiveProduct = (req, res) => 
	res.send({isActive: false});