var request = require('supertest');
var app = require('../app');

describe('GET /sendsms', function(){
    it('respond with json', function(done){
        request(app)
            .get('/sendsms')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200, done);

    })
});