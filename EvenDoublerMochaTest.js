/**
 * Created by gshanka on 12/24/14.
 */
var should = require('should');
var even = require('./EvenDoubler');

describe('EvenDoubler',function(){
    describe('when used sync',function(){
        it('should double even numbers correctly',function(){
           even.evenDoublerSync(2).should.equal(4);
        });
        it('should throw on odd numbers',function(done){
            (function(){even.evenDoublerSync(3)}).should.throw(/Odd/);
            done();
        });
    });
    describe('when used async',function(){
        it('should double even numbers correctly',function(done){
            even.evenDoubler(2,function(err,results){
                should.not.exist(err);
                results.should.equal(4);
                done();
            });
        });
        it('should return error on odd numbers',function(done){
            even.evenDoubler(3,function(err,results){
                should.exist(err);
                should.not.exist(results);
                done();
            });
        });
    });
});