var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');

global.chai = require('chai');

var chaiHTTP = require('chai-http');

global.chai.use(require('chai-http'));

global.app = loopback();
var serverPath = path.join(process.cwd(), 'server');

boot(global.app, serverPath);