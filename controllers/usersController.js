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
   }
};

module.exports = usersController;
