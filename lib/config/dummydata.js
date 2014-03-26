'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Class = mongoose.model('Class'),
  News = mongoose.model('News');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Class.find({}).remove(function() {
  Class.create({
    name : 'MongoDB Kick-Start Lab',
    shortDescription : 'A half-day, hands-on lab teaching developers the basics of using MongoDB as their data store.',
    longDescription: 'What you will learn:<ul><li>What NoSQL is and where MongoDB fits</li><li>How it compares to an RDBMS</li><li>How to do basic CRUD operations</li><li>How to get aggregate data</li><li>How to design your MongoDB Schema</li></ul><p>This is NOT an advanced class. This is meant for software developers looking to expand their skills to be able to use MongoDB effectively as a data store. No prior knowledge MongoDB is required, but a basic understanding of JSON and JavaScript would be beneficial.</p>'
  }, function() {
      console.log('finished populating classes');
    }
  );
});

News.find({}).remove(function() {
  News.create({
      title : 'Paige Employees Speaking at Nebraska Code Camp',
      text : 'Jon Mills and Lee Brandt will be speaking at the 4th-annual Nebraska Code Camp on March 28th and 29th. Jon will be talking about "The Right Amount of Planning" and Lee will be giving a talk about "Creating a ReST API with Mongo and NodeJS". Tickets to the event are free, so there\'s almost no excuse to miss it!'
    }, function() {
      console.log('finished populating news stories');
    }
  );
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});
