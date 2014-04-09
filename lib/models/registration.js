'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RegistrationSchema = new Schema({
  class: String,
  name: String,
  email: String,
  city: String,
  state: String
});


module.exports = mongoose.model('Registration', RegistrationSchema);
