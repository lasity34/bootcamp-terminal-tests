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
  
   
})