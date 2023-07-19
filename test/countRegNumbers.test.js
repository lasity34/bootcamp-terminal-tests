import assert from 'assert'
import countRegNumber from '../countRegNumbers.js';


describe('The countRegNumbers function', function(){

    it('should count 3 reg numbers', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('should Test false if Reg does not end with GP', function(){
        assert.equal(1, countRegNumber('CA 182736'));
    });
});