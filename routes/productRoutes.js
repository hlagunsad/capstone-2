const router = require('express').Router();
const {viewAllProducts,
	viewSingleProduct,
	createProduct,
	updateProduct,
	archiveProduct } = require('./../controllers/productControllers.js')
const Product = require('./../models/Product.js');	
const {verify, verifyAdmin} = require('./../auth.js');

router.get('/', viewAllProducts);
router.get('/:prodId', viewSingleProduct);
router.post('/', verify, verifyAdmin, createProduct);
router.put('/:prodId', verify, verifyAdmin, updateProduct);
router.put('/:prodId/archive', archiveProduct);
module.exports = router;