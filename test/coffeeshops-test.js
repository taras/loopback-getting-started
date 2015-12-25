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

describe('/coffeeshops/status?id={query}&hour={hour}', function(){
   describe('GET', function(){
       it('should return open message when specified open hour', function(){
           return chai.request(app).get('/api/coffeeshops/status')
            .query({id: 1, hour: 12})
            .then(function(res){
                assert.equal(res.status, 200, 'status is 200');
                assert.equal(res.body.status, 'We are open for business.'); 
            });
       });
       
       it('should return closed message when specified closed hour', function(){
          return chai.request(app).get('/api/coffeeshops/status')
            .query({id: 1, hour: 6})
            .then(function(res){
                assert.equal(res.status, 200, 'status is 200');
                assert.equal(res.body.status, 'Sorry, we are closed. Open daily from 7 to 20.');
            });
       });
   });
});

describe('/coffeeshops/getname?id={id}', function(){
   describe('GET', function(){
      it('show return name of the coffeeshop', function(){
         return chai.request(app).get('/api/coffeeshops/getname?id=1')
            .then(function(res){
               assert.equal(res.status, 200, 'status is 200');
               assert.equal(res.body.name, 'Name of coffee shop is Bel Cafe'); 
            });
      });
   });
});