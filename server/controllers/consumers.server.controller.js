var mongoose = require('mongoose');
var consumer = require('./../models/consumer.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  consumer.find(function(err, data) {
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
  var consumer = new consumer(req.body);
  consumer.user = req.user;
  consumer.save(function(err, data) {
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
  res.json(req.consumer);
};


exports.delete = function(req, res) {
	var consumer = req.consumer;
	consumer.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(consumer);
		}
	});
};


module.exports.update = function(req, res) {
  var consumer = req.consumer;

  	consumer = _.extend(consumer, req.body);

  	consumer.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(consumer);
  		}
  	});
};

exports.consumerByID = function(req, res, next, id) {
	consumer.findById(id).populate('user', 'email').exec(function(err, consumer) {
		if (err) return next(err);
		if (!consumer) return next(new Error('Failed to load consumer ' + id));
		req.consumer = consumer;
		next();
	});
};
