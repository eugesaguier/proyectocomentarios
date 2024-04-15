const usersController = {
   register: function(req, res) {
      res.render('register', {
         title: 'Mercado Liebre Argentina'
      });
   }
};

module.exports = usersController;
