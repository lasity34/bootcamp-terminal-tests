import assert from 'assert'
import yearsAgo from '../yearsAgo';


describe('The isWeekday function', function(){

    it('should Test true if Tuesday is weekday', function(){
        assert.equal(true, isWeekday('Tuesday'));
    });
    it('should Test true if Wednesday is weekday', function(){
        assert.equal(true, isWeekday('Wednesday'));
    });
    it('should Test false if Sunday is weekday', function(){
        assert.equal(false, isWeekday('Sunday'));
    });
    it('should Test false if Saturday is weekday', function(){
        assert.equal(false, isWeekday('Saturday'));
    });
   
});