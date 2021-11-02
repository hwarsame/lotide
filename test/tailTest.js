
/*const assertEqual =  require('../assertEqual');
const tail = require('../tail');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
*/
//Test using Mocha and Chai

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () =>{
  const words = ['Yo', 'Yo', 'TimHortons'];
  it("returns the length of the array which is 3", () =>{
    assert.strictEqual((words.length), 3);
  });
  const food = ['Orange', 'Chips'];
  it("returns a length of 2", () => {
    assert.strictEqual((food.length), 2);
  });
});