module.exports = function(app){

 var medications = require('./../controllers/medications.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/medications')
	.get(medications.list)
	.post(users.requiresLogin, medications.create);

  app.route('/medications/api/medications/:medicationid')
	.get(medications.read)
  .delete(users.requiresLogin, medications.delete);

	app.route('/medications/edit/api/medications/:medicationid')
	.get(medications.read)
	.put(users.requiresLogin, medications.update);


app.param('medicationid', medications.medicationByID);


}
