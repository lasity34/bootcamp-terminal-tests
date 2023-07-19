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
    it("It should return Paarl ", function () {
        assert.equal(
          'Paarl',
          fromWhere('CJ 567489'),
          "This should be true"
        );
      });
      it("It should return Cape Town ", function () {
        assert.equal(
          'Cape Town',
          fromWhere('CA 567489'),
          "This should be true"
        );
      });
      it("It should return some other place ", function () {
        assert.equal(
          'Some other place!',
          fromWhere('CZ 567489'),
          "This should be true"
        );
      });
   
})