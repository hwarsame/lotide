const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports =  middle;