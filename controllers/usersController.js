const db = require("../db/index")


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
         index:db.usuarios
      })
   },

   profileEdit: function(req,res){
      res.render("profile-edit",{
         title:"Mercado Liebre Argentina"
      })
   }
};

module.exports = usersController;
