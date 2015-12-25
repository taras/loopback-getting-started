var request = require('supertest');

describe('/coffeeshops', function () {
  describe('GET', function () {
    it('should return 3 coffeeshops', function (done) {
      request(app)
        .get('/api/coffeeshops')
        .expect(200)
        .end(function (err, res) {
          expect(err).to.equal(null);
          expect(res.body.data.length).to.equal(3);
          done();
        });
    });
  });
});

describe('/coffeeshops/{id}', function () {
  describe('GET', function () {
    it('should return Bel Cafe for id=1', function (done) {
      request(app)
        .get('/api/coffeeshops/1')
        .expect(200)
        .end(function (err, res) {
          expect(err).to.equal(null);
          expect(res.body.data).to.have.property('id').and.equal('1');
          done();
        });
    });

    it('should return a 404 for id=4', function (done) {
      request(app)
        .get('/api/coffeeshops/4')
        .expect(400)
        .end(done);
    });
  });
});

describe('/coffeeshops/status?id={query}&hour={hour}', function () {
  describe('GET', function () {
    it('should return open message when specified open hour', function (done) {
      request(app)
        .get('/api/coffeeshops/status')
        .query({ id: 1, hour: 12 })
        .expect(200)
        .end(function (err, res) {
          expect(err).to.equal(null);
          expect(res.body).to.have.property('status').and.equal('We are open for business.');
          done();
        });
    });

    it('should return closed message when specified closed hour', function (done) {
      request(app)
        .get('/api/coffeeshops/status')
        .query({ id: 1, hour: 6 })
        .expect(200)
        .end(function (err, res) {
          expect(err).to.equal(null);
          expect(res.body).to.have.property('status').and.equal('Sorry, we are closed. Open daily from 7 to 20.');
          done();
        });
    });
  });
});

describe('/coffeeshops/getname?id={id}', function () {
  describe('GET', function () {
    it('show return name of the coffeeshop', function (done) {
      request(app)
        .get('/api/coffeeshops/getname?id=1')
        .expect(200)
        .end(function (err, res) {
          expect(err).to.equal(null);
          expect(res.body).to.have.property('name').and.equal('Name of coffee shop is Bel Cafe');
          done();
        });
    });
  });
});