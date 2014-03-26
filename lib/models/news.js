'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var NewsSchema = new Schema({
  title: String,
  text: String
});

module.exports = mongoose.model('News', NewsSchema);
