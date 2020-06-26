var expect  = require('chai').expect;
var request = require('request');



describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', function(done){
            request('http://localhost:8888/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('Main page content', function(done) {
            request('http://localhost:8888/' , function(error, response, body) {
                expect(body).to.include('ContactKeeper');
                done();
            });
        });
        it('content', function(done) {
            request('http://localhost:8888/login' , function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe ('About page', function() {
        it('status', function(done){
            request('http://localhost:8888/about', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });
});