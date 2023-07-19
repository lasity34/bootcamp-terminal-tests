import assert from 'assert'
import allPaarl from '../countAllFromPaarl.js';


describe('The AllFromPaarl function', function(){

    it('should count 1 reg numbers from Paarl', function(){
        assert.equal(1, allPaarl('CL 900, CJ 678 543, CA 34567 CN 7864'));
    });
    it('should count 3 reg numbers from Paarl', function(){
        assert.equal(3, allPaarl('CL 900, CJ 678 543, CJ 34567, CJ 67890, CN 7864'));
    });
    it('should count 2 reg numbers from Paarl', function(){
        assert.equal(2, allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'));
    });
    it('should count 4 reg numbers from Paarl', function(){
        assert.equal(4, allPaarl('CJ00, CJ 678 543, CJ 34567, CJ 67890, CN 7864'));
    });
});