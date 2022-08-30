const express = require('express');
const products = require('../models/products');
const router = express.Router();
const model = require('../models/products')();

router.get('/', (req, res) => {
    model.find({}, (err, products)=>{
        if(err) throw err;
        res.render('index',{
        title: 'Productos',
        product: products
    });
    });
    
});
router.get('/products', (req, res) => {
    model.find({}, (err, products)=>{
        if(err) throw err;
        res.render('products',{
        title: 'Productos',
        product: products
    });
    });
    
});
router.post('/add', (req,res) => {
    let body = req.body;
    body.status = false;

    model.create(body, (err, products) =>{
        if(err) throw err;
        res.redirect('/');
    })
});
router.get('/delete/:id', (req,res) => {
    let id = req.params.id;

    model.remove({_id: id}, (err, products) =>{
        if(err) throw err;
        res.redirect('/products');
    })
});
module.exports = router;
