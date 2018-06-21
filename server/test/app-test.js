var chai = require('chai');
let chaiHttp = require('chai-http');
var app = require('../app.js');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Registry API', function() {  
    // Testing the save record expecting status 201 of success
    describe('POST /sacramental-records', function() {
        it('saves a new record', function(done) {
            chai.request(app)
            .post('/sacramental-records')
            .send({
                name: 'Devin Rose',
                type: 'CONFIRMATION',
                diocese: 'Austin',
                date: '05-23-2001'
            })
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                done(err);
            });
        });
    });
});