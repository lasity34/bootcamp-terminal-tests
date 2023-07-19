import assert from 'assert'
import allPaarl from '../countAllFromPaarl';


describe('The AllFromPaarl function', function(){

    it('should count 3 reg numbers', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
  
});