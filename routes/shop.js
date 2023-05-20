const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');
const adminData = require('./admin');

const router = express.Router();

router.get('/', productsController.getProducts);

router.get('/products', )
router.get('/cart', )

module.exports = router;
