
/*const middle = require('../middle')

//Test Case
console.log(middle([1, 2, 4, 5, 6, 8]));
console.log(middle([1]));
console.log(middle([1,2,3]));
*/
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () =>{
  it("returns '4', '5' for ['1, 2, 4, 5, 6, 8']", () => {
    assert.strictEqual(middle['1, 2, 4, 5, 6, 8']), '4', '5';
  });
  it("should return 2 from the array of [1, 2, 3]", () =>{
    assert.deepEqual(middle([1, 2, 3]) , 2);
  });
 
});