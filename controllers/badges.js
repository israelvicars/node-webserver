'use strict';

var model = require('../models/badges');
var _ = require('underscore');

// Save badges

exports.save = function(req, res, next) {
	var badges = _.clone(req.body);
	model.save(badges, function(err){
		if (err) return res.json(503, { error: true });
		next();
	});
};

// Trim badges

exports.trim = function(req, res, next) {
  model.trim();
  next();
};

// Send badges to pub/sub socket in model

exports.send = function(req, res, next) {
	var badges = _.clone(req.body);
	model.send(badges);
	res.json(200, 'success');
};

// Get 10 badges from model

exports.get = function(req, res, next) {
	model.get(function(err, data){
		res.json(err ? 503 : 200, {
      error: err ? true : null,
      errorMessage: err ? err : null,
      data: data
    });
	});
};
