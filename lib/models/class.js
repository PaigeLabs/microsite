'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ClassSchema = new Schema({
  name: String,
  shortDescription: String,
  longDescription: String
});

module.exports = mongoose.model('Class', ClassSchema);