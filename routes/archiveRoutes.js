const router = require('express').Router();
const {viewInactiveProducts} = require('./../controllers/archiveControllers.js')
const Product = require('./../models/Product.js');
const {verify, verifyAdmin} = require('./../auth.js');

router.get('/', verify, verifyAdmin, viewInactiveProducts);
module.exports = router;