'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RegistrationSchema = new Schema({
  name: String,
  email: String,
  city: String,
  state: String
});


module.exports = mongoose.model('Registration', RegistrationSchema);
