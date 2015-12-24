var assert = require('assert');

describe('/coffeeshops', function() {
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

describe('/coffeeshops/{id}', function(){
    describe('GET', function(){
       it('should return Bel Cafe for id=1', function(){
          return chai.request(app).get('/api/coffeeshops/1')
            .then(function(res){
                assert.equal(res.status, 200, 'status is 200');
                assert.equal(res.body.name, 'Bel Cafe');
            });
       });
       
       it('should return a 404 for id=4', function(){
          return chai.request(app).get('/api/coffeeshops/4')
            .then(function(res){
               assert.equal(res.status, 404, 'status is 404'); 
            });
       });
    });
});