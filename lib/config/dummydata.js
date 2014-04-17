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
      console.log('finished adding MongoDB Kick-Start');
    }
  );

  Class.create({
    name: 'MEAN Stack Kick-Start Lab',
    shortDescription: 'A three-day, hands-on introduction to developing for the web using the MEAN Stack.',
    longDescription: 'What you will learn:<ul><li>The Basics of MongoDB for small to medium sized websites</li><li>Getting started with NodeJS</li><li>ExpressJS for NodeJS Web Development</li><li>AngularJS for a reactive web user experience</li><li>Using Yeoman and Bower to get started and move quickly</li><li>Using Grunt to build your application</li><p>This is for experienced web developers who are interested in the MEAN stack but don\'t know how to get started. If you\'ve been hearing the hype, even listening to your developer friends talk about how cool the MEAN stack is, and you want to get a good kick-start to MEAN Stack development, this is the class for you.</p>'
  }, function(){
    console.log('finished loading the MEAN Stack Kick-Start');
  });
});

News.find({}).remove(function() {
  News.create({
      title : 'Paige Employees Speaking at Nebraska Code Camp',
      text : 'Jon Mills and Lee Brandt will be speaking at the 4th-annual Nebraska Code Camp on March 28th and 29th. Jon will be talking about "The Right Amount of Planning" and Lee will be giving a talk about "Creating a ReST API with Mongo and NodeJS". Tickets to the event are free, so there\'s almost no excuse to miss it!'
    }, function() {
      console.log('finished populating NCC story');
    }
  );

  News.create({
      title : 'Paige Employees Speaking at Prairie Dev Con',
      text : 'Jon Mills and will be speaking at Prairie Dev Con in Winnipeg, MB on April 7th & 8th. Jon will be talking about "Rocking Out with Android Studio" and "Demystifying Big Data". If you\'re in the Winnipeg area in early April, stop by and check it out!'
    }, function() {
      console.log('finished populating NCC story');
    }
  );

  News.create({
      title : 'Join Paige at the Kansas City Developer Conference',
      text : 'Paige Technologies is a Titanium sponsor of the Kansas City Developer Conference, being held May 15th, 16th & 17th at the Kansas City Convention Center. We will have a booth and lots of fun surprises. Sign up for KCDC and come by our booth and say hi!'
    }, function() {
      console.log('finished populating KCDC story');
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
