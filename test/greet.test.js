
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
});