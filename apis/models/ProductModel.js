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
    getallproducts:function(callback){
        db.query('SELECT * from products', function (err, rows) {
            if(err) throw err;
            callback({data:rows,status:'success',message:'Product Listing'});
        });
    },
    getproductdetail:function(data, callback){
        console.log(data);
        db.query('SELECT * from products where product_id = "'+data.id+'"', function (err, rows) {
            if(err) throw err;
            callback({data:rows[0],status:'success',message:'Product Listing'});
        });
    }
};
module.exports= Product;