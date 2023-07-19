import assert from 'assert'
import countRegNumber from '../countRegNumbers.js';


describe('The countRegNumbers function', function(){

    it('should count 3 reg numbers', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('should count 2 reg numbers', function(){
        assert.equal(2, countRegNumber('CA 182736,CJ 812328'));
        
    });
    it('should count 2 reg numbers', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('should count 4 reg numbers', function(){
        assert.equal(1, countRegNumber('CA 182736,CA 182736,CY 523519,CJ 812328'));
        
    });
});