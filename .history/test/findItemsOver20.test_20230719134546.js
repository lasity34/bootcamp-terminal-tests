import assert from 'assert'
import findItemsOver20 from '../findItemsOver20.js'

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  
  var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
  ];
  
  var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
  ];
  
  var results2 = [];
  
  var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];
  
  var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];
  
  
  describe("Test my findItemsOver20 function", function () {
      it("It should return a list with an array of objects from the first array listItems which will be the 2 objects pears and bananas", function () {
        assert.deepEqual(
          results,
          findItemsOver20(itemList),
          "This should be true"
        );
      });
    
      it("It should return a list with an empty array as there are no items above 20", function () {
        assert.deepEqual(results2,  findItemsOver20(itemList2));
      });
  
       
      it("It should return an array of all items from itemsList3 (apples, bananas, oranges)", function () {
          assert.deepEqual(results3,  findItemsOver20(itemList3));
        });
    });
  
  
  
