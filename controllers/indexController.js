const db = require("../db/index")
indexProd = db.productos

const indexController = {
    index: function(req,res){
        res.render('index', { 
            title: 'Mercado Liebre' })
    },
    search: function(req,res){
        res.render("search-results",{
            title: "Mercado Liebre Argentina"
        })
    }}

module.exports = indexController 