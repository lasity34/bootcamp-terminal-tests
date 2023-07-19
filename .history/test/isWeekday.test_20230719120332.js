import assert from 'assert'
import isWeekday from '../isWeekday.js';


describe('The isWeekday function', function(){

    it('should Test true if Tuesday is weekday', function(){
        assert.equal(true, isFromBellville('CY'));
    });
    it('should Test false if Reg is not from Bellville', function(){
        assert.equal(false, isFromBellville('CA'));
    });
    it('should Test true if Reg is from Bellville', function(){
        assert.equal(true, isFromBellville('CY'));
    });
    it('should Test false if Reg is not from Bellville', function(){
        assert.equal(false, isFromBellville('CJ'));
    });
});