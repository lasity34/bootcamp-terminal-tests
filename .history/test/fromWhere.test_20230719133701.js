import assert from 'assert'
import fromWhere from '../fromWhere.js'


describe("Test my fromWhere function", function () {
    it("It should return Bellville ", function () {
      assert.equal(
        'Bellville',
        fromWhere('CY 567489'),
        "This should be true"
      );
    });
  
    it("It should return a string that is R6.15, because there is 2 calls(R5.50) and 1 sms(R0.65) in the argument", function () {
      assert.equal("R6.15",  totalPhoneBill('call, call, sms'));
    });
})