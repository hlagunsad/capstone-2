module.exports.viewAllProducts = (req, res) => 
	res.send(`Here you will view our products`);
module.exports.viewSingleProduct = (req, res) => 
	res.send(`Here you will view a single product id: ${req.params.prodId}`);
module.exports.createProduct = (req, res) => 
	res.send(`Admin Only! Create a new product here.`);	
module.exports.updateProduct = (req, res) => 
	res.send(`Admin Only! Update id: ${req.params.prodId} product here.`);	
module.exports.archiveProduct = (req, res) => 
	res.send(`Admin Only! Archive id: ${req.params.prodId} product here.`);