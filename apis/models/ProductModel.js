var	db = require("../config/databaseconfig");

var Product =
{
    createproduct:function(data, callback){
        console.log(data);
        const productArr = {
            'name' : data.name,
            'description' : data.description,
            'price' : data.price
        };
        db.query('INSERT into products set ?',productArr, function (err, rows) {
                    if(err) throw err;
                    callback({data:'',status:'success',message:'Product added Successfully'});
                });
    },
    getallproducts:function(data, callback){
        limit = (data -1) * 10;
        db.query('SELECT * from products LIMIT '+limit+',10', function (err, rows) {
            if(err) throw err;
            db.query('SELECT COUNT(product_id) AS total_products FROM `products`', function (err, result) {
                if (err) throw err;
                callback({data:rows,status:'success',message:'Product Listing',totalProducts:result[0].total_products});
            });
        });
    },
    searchproduct:function (data, callback) {
        console.log("11111", data.name);
        db.query('SELECT * from products where name like ?', '%' + data.name + '%', function (err, result) {
            if (err) throw err;
            callback({data:result,status:'success',message:'Product Listing'});
        });
    }
};
module.exports= Product;