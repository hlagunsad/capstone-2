const router = require('express').Router();
const {createOrder, myOrders, allOrders} = require('./../controllers/orderControllers.js')

router.post('/', createOrder);
router.get('/myOrders', myOrders);
router.get('/', allOrders);

module.exports = router;