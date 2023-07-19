import assert from 'assert'
import yearsAgo from '../yearsAgo.js';


describe('The yearsAgo function', function(){

    it('should Test how many years ago it was from the current date', function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });
    it('should Test how many years ago it was from the current date', function(){
        assert.equal((new Date().getFullYear() - 1953), yearsAgo(1953));;
    });
    it('should Test how many years ago it was from the current date', function(){
        assert.equal((new Date().getFullYear() - 1951), yearsAgo(1951));
    });
    it('should Test how many years ago it was from the current date', function(){
        assert.equal((new Date().getFullYear() - 1921), yearsAgo(1921));
    });
 
   
});