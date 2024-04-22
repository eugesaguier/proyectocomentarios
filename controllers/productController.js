const db = require("../db/index")
indexProd = db.productos

const productController = {
    product: function(req,res){
        res.render("product",{
            title: "Laurent Watches",
            id:req.params.id
        })
    },
    add: function(req,res) {
        res.render("product-add",{
            title: 'Laurent Watches'
        });
    }
}

module.exports = productController 