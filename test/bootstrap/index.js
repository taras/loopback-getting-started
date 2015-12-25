var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');

global.chai = require('chai');
global.expect = require('chai').expect;

global.app = loopback();
var serverPath = path.join(process.cwd(), 'server');

boot(global.app, serverPath);