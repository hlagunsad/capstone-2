const router = require('express').Router();
const {viewAllProducts,
	viewSingleProduct,
	createProduct,
	updateProduct,
	archiveProduct } = require('./../controllers/productControllers.js')

router.get('/', viewAllProducts);
router.get('/:prodId', viewSingleProduct);
router.post('/', createProduct);
router.put('/:prodId', updateProduct);
router.put('/:prodId/archive', archiveProduct);
module.exports = router;