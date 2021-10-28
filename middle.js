const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅  Assertion passed ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed + ${actual} + !== + ${expected}`);
  }
};

const middle = function(array) {
  let mid = [];
  {
    if (array.length <= 2) {
      return mid;
    } else if (array.length > 2 && array.length % 2 === 0) {
      mid = [array[Math.floor((array.length - 1) / 2)], array[Math.floor(array.length / 2)]];
      return mid;
    } else if (array.length > 2 && array.length % 2 !== 0) {
      mid = array[Math.floor(array.length - 1) / 2];
      return mid;
    }
  }
};

console.log(middle([1, 2, 4, 5, 6, 8]));
console.log(middle([1]));
console.log(middle([1,2,3]));
