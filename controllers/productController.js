const db = require("../db/index")
indexProd = db.productos

const productController = {
    product: function(req,res){
        res.render("product",{
            title: "Mercado Liebre Argentina",
            id:req.params.id
        })
    },
    add: function(req,res) {
        res.render("product-add",{
            title: 'Mercado Liebre Argentina'
        });
    }
}

module.exports = productController 