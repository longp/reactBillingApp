module.exports = function(app){

 var logins = require('./../controllers/logins.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/logins')
	.get(logins.list)
	.post(users.requiresLogin, logins.create);

  app.route('/logins/api/logins/:loginid')
	.get(logins.read)
  .delete(users.requiresLogin, logins.delete);

	app.route('/logins/edit/api/logins/:loginid')
	.get(logins.read)
	.put(users.requiresLogin, logins.update);


app.param('loginid', logins.loginByID);


}
