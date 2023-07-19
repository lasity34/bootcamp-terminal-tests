import assert from 'assert'
import yearsAgo from '../yearsAgo';


describe('The isWeekday function', function(){

    it('should Test true if Tuesday is weekday', function(){
        assert.equal(yearsAgo(1976), yearsAgo((new Date().getFullYear() - 1976)));
    });
 
   
});