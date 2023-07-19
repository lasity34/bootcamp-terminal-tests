import assert from 'assert'
import yearsAgo from '../yearsAgo.js';


describe('The isWeekday function', function(){

    it('should Test how many years ago it was from the current date', function(){
        assert.equal(yearsAgo(1989), yearsAgo((new Date().getFullYear() - 1989)));
    });
    it('should Test how many years ago it was from the current date', function(){
        assert.equal(yearsAgo(1953), yearsAgo((new Date().getFullYear() - 1953)));
    });
    it('should Test how many years ago it was from the current date', function(){
        assert.equal(yearsAgo(1952), yearsAgo((new Date().getFullYear() - 1952)));
    });
    it('should Test how many years ago it was from the current date', function(){
        assert.equal(yearsAgo(1971), yearsAgo((new Date().getFullYear() - 1971)));
    });
 
   
});