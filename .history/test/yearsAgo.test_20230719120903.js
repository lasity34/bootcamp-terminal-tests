import assert from 'assert'
import yearsAgo from '../yearsAgo';


describe('The isWeekday function', function(){

    it('should Test how many years ago it was from the current date', function(){
        assert.equal(yearsAgo(1976), yearsAgo((new Date().getFullYear() - 1976)));
    });
 
   
});