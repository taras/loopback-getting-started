var request = require('supertest');

describe('reviews', function () {
  describe('anyone can read a review', function () {
    it('should allow reading a review', function (done) {
      request(app)
        .get('/api/reviews/1')
        .expect(200)
        .end(function (err, res) {
          expect(err).to.equal(null);
          expect(res.body.data).to.have.property('id').and.equal('1');
          done();
        });
    });
  });

  describe('only logged in users can edit or delete a review', function () {
    it('should return a 401 for unauthenticated update request', function (done) {
      request(app)
        .patch('/api/reviews/1')
        .send({
          data: {
            type: 'reviews',
            id: 1,
            attributes: { 
              comments: 'foo' 
            }
          }
        })
        .set('Content-Type', 'application/json')
        .expect(400)
        .end(function(err, res){
          expect(err).to.equal(null);
          expect(res.body.errors[0]).to.have.property('detail').and.equal('Authorization Required');
          done();
        });
    });
    it('should return a 401 for unauthenticated delete request', function (done) {
      request(app)
        .delete('/api/reviews/1')
        .expect(400)
        .end(function(err, res){
          expect(err).to.equal(null);
          expect(res.body.errors[0]).to.have.property('detail').and.equal('Authorization Required');
          done();
        });
    });
  });
});