const router = require('express').Router();
const {createOrder, myOrders, allOrders} = require('./../controllers/orderControllers.js');
const {verifyUser, verify, verifyAdmin} = require('./../auth.js');

router.post('/', verify, verifyUser, createOrder);
router.get('/myOrders', verify, verifyUser, myOrders);
router.get('/', verify, verifyAdmin, allOrders);

module.exports = router;