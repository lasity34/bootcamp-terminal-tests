import assert from 'assert'
import isWeekday from '../isWeekday.js';


describe('The isWeekday function', function(){

    it('should Test true if Tuesday is weekday', function(){
        assert.equal(true, isWeekday('Tuesday'));
    });
   
});