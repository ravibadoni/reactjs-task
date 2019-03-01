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
    Products.getallproducts(function(err, task) {
        if (err){
            res.send(err);
        }else{
            res.send(task);
        }
    });
});
// product detail Api
router.post('/productdetail', function(req, res) {
    console.log("reqqq", req.body);
    Products.getproductdetail(req.body, function(err, task) {
        if (err){
            res.send(err);
        }else{
            res.send(task);
        }
    });
});

module.exports = router;