import assert from 'assert'
import regNumbersForPaarl from '../countAllFromPaarl.js';


describe('The AllFromPaarl function', function(){

    it('should count 2 reg numbers from Paarl', function(){
        assert.equal(2, regNumbersForPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'));
    });
  
});