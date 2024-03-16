const path = require('path');
const products = []

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {

  products.push(...products,{title: req.body.title})
  console.log('log no admin, tentando pegar todos os dados', products)
  res.redirect('/');
});

exports.routes = router;
exports.products = products
