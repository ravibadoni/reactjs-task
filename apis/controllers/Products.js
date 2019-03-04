var express = require('express');
var router = express.Router();
var Products = require("../models/ProductModel");

// create a product
router.post('/create', function(req, res) {
    console.log(req);
    Products.createproduct(req.body, function(err, task) {
        if (err){
            res.send(err);
        }else{
            res.send(task);
        }
    });
});
//get all products list
router.get('/all', function(req, res) {
    Products.getallproducts(1, function(err, task) {
        if (err){
            res.send(err);
        }else{
            res.send(task);
        }
    });
});
// pagination packages
router.get('/paginate/:id', function(req, res) {
    Products.getallproducts(req.params.id, function(err, task) {
        if (err){
            res.send(err);
        }else{
            res.send(task);
        }
    });
});
// search product
router.post('/search', function(req, res) {
    Products.searchproduct(req.body, function(err, task) {
        if (err){
            res.send(err);
        }else{
            res.send(task);
        }
    });
});

module.exports = router;