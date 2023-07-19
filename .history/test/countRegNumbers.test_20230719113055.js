import assert from 'assert'
import regCheck from '../regCheck.js';


describe('The reg function', function(){

    it('should Test true if Reg ends with GP', function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });
    it('should Test false if Reg does not end with GP', function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
    });
});