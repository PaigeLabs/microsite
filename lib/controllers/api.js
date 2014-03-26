'use strict';

var mongoose = require('mongoose'),
    mailer = require('../services/emailService'),
    Registration = mongoose.model('Registration'),
    News = mongoose.model('News'),
    Class = mongoose.model('Class');

exports.classes = function(req, res) {
  return Class.find(function (err, classes) {
    if (!err) {
      return res.json(classes);
    } else {
      return res.send(err);
    }
  });
};

exports.news = function(req, res) {
  return News.find(function (err, news) {
    if (!err) {
      return res.json(news);
    } else {
      return res.send(err);
    }
  });
};

exports.registrations = function(req, res){
  var newReg = new Registration(req.body);
  newReg.save(function(err){
    if (err) return res.json(400, err);

    var message = "I'm interested in courses in "+newReg.city+","+newReg.state;

    mailer.send(newReg.email, 'lee@paigetech.com', 'Course Interest', message);

    return res.send(200, newReg);
  });

};