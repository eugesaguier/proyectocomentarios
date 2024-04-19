const db = require("../db/index")
index = db.usuarios

const usersController = {
   register: function(req, res) {
      res.render('register', {
         title: 'Mercado Liebre Argentina'
      });
   },
   login: function(req,res){
      res.render('login',{
         title: 'Mercado Liebre Argentina'
      })
   },
   profile: function(req,res){
      res.render("profile",{
         title: "Mercado Liebre Argentina",
         id: req.params.id
      })
   },

   profileEdit: function(req,res){
      res.render("profile-edit",{
         title:"Mercado Liebre Argentina"
      })
   }, 
   user: function(req,res){                
      res.render("user", {
         title: "Mercado Liebre Argentina",
         id: req.params.id
      })
   }  
};

module.exports = usersController;
