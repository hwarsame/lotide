const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion passed ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed + ${actual} + !== + ${expected}`);
  }
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

};



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);




