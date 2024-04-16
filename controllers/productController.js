const db = require("../db/index")
index = db.productos

const productController = {
    add: function(req,res) {
        res.render("product-add",{
            title: 'Mercado Liebre Argentina'
        });
    }
}

module.exports = productController 