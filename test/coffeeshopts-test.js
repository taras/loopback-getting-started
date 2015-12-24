var bootServer = require('./helpers/boot-server');
var assert = require('assert');

describe('/coffeeshopts', function() {
  describe('GET', function () {
    it('should return 3 coffeeshops', function () {
      return chai.request(app).get('/api/coffeeshops')
        .then(function(res){
          assert.equal(res.status, 200, 'status is 200');
          assert.equal(res.body.length, 3, 'there are 3 items');
        });
    });
  });
  
});