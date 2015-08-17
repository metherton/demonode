var request = require('supertest');
var app = require('../app');

describe('/sendsms', function() {

    it('GET should respond with 200', function(done){
        request(app)
            .get('/sendsms')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200, done);

    });

    it('POST should respond with 200', function(done){
        request(app)
            .post('/sendsms')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200, done);

    });
});