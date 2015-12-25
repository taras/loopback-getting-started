var assert = require('assert');

describe('reviews', function(){
  describe('anyone can read a review', function(){
    it('should allow reading a review', function(){
      return chai.request(app).get('/api/reviews/1')
        .then(function(res){
          assert.equal(res.status, 200);
        });
    });
  });
  
  describe('only logged in users can edit or delete a review', function(){
    it('should return a 401 for unauthenticated update request', function(){
      return chai.request(app)
        .put('/api/reviews/1')
        .send({ comments: 'foo' })
        .then(function(res){
          assert.notEqual(res.status, 200, 'Should not be 200');
        })
        .catch(function(res){
          assert.equal(res.status, 401, 'Anonymous user should get a 401');
        });
    });
    it('should return a 401 for unauthenticated delete request', function(){
      return chai.request(app)
        .delete('/api/reviews/1')
        .then(function(res){
          assert.notEqual(res.status, 200, 'Should not be 200');
        })
        .catch(function(res){
          assert.equal(res.status, 401, 'Anonymous user should get a 401');
        });
    });
  });
});