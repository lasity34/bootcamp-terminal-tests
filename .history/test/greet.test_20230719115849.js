
import assert from 'assert'
import greet from '../greet.js'


describe('The greet function', function(){

    it('should greet Bjorn correctly', function(){
        assert.equal('Hello, Bjorn', greet('Bjorn'));
    });
    it('should greet Sean correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Sean', greet('Sean'));
    });
    it('should greet Tom correctly', function(){
        assert.equal('Hello, Justin', greet('Justin'));
    });
    it('should greet Justin correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Justin', greet('Justin'));
    });
});