import assert from 'assert'
import regCheck from '../regCheck.js';


describe('The isFromBellville function', function(){

    it('should Test true if Reg is from Bellville', function(){
        assert.equal(true, isFromBellville('CY'));
    });
    it('should Test false if Reg is not from Bellville', function(){
        assert.equal(false, isFromBellville('CA'));
    });
});