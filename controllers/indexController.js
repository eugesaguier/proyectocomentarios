const db = require("../db/index")
indexProd = db.productos

const indexController = {
    index: function(req,res){
        res.render('index', { 
            title: 'Laurent Watches' })
    },
    search: function(req,res){
        res.render("search-results",{
            title: "Laurent Watches"
        })
    }}

module.exports = indexController 