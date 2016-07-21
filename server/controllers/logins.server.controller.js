var mongoose = require('mongoose');
var login = require('./../models/login.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  login.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var login = new login(req.body);
  login.user = req.user;
  login.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.login);
};


exports.delete = function(req, res) {
	var login = req.login;
	login.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(login);
		}
	});
};


module.exports.update = function(req, res) {
  var login = req.login;

  	login = _.extend(login, req.body);

  	login.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(login);
  		}
  	});
};

exports.loginByID = function(req, res, next, id) {
	login.findById(id).populate('user', 'email').exec(function(err, login) {
		if (err) return next(err);
		if (!login) return next(new Error('Failed to load login ' + id));
		req.login = login;
		next();
	});
};
