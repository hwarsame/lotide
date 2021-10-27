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






const letterPositions = function(sentence) {
  const results = {};
  const arraySentence = sentence.split('');
  for (let [index, letter] of arraySentence.entries()) {
    console.log(letter, index);
    if (results[letter]) {
      results[letter].push(index);
    } else {
      results[letter] = [index];
    }


  }

  return results;
};
//letterPositions("hello");
assertArraysEqual(letterPositions("hello").e, [1]);