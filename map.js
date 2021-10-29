const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅  Assertion passed ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed + ${actual} + !== + ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

};



const words = ["ground", "control", "to", "major", "tom"];
//function below
const map = function(array, callback){
  const results = [];
  for (let item of array){
    results.push(callback(item));
  }
  return results;

}
//let test = map(words, word => word [0]);
//console.log(test);


const testArray = ['Pebble', 'Trebble', 'Hebble', 'Debble', 'Vebble']

let secondLetters = testArray.map(letters => letters[1])

const test2 = ['Hi', 'Bi', 'Ti', 'Yi']

let secondLetters2 = test2.map(x => x[1]);
assertArraysEqual(secondLetters, [ 'e', 'r', 'e', 'e', 'e'])
assertArraysEqual(secondLetters2, [ 'i', 'i', 'i', 'i']) 
