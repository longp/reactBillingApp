module.exports = function(app){

 var consumers = require('./../controllers/consumers.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/consumers')
	.get(consumers.list)
	.post(users.requiresLogin, consumers.create);

  app.route('/consumers/api/consumers/:consumerid')
	.get(consumers.read)
  .delete(users.requiresLogin, consumers.delete);

	app.route('/consumers/edit/api/consumers/:consumerid')
	.get(consumers.read)
	.put(users.requiresLogin, consumers.update);


app.param('consumerid', consumers.consumerByID);


}
