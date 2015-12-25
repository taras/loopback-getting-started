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
});