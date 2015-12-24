var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var RSVP = require('rsvp');

var serverPath = path.join(process.cwd(), 'server');

module.exports = function() {
  var app = loopback();

  boot(app, serverPath);
  
  return RSVP.resolve(app);
};
