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

const eqArrays = function(bigH, tanker) {
  for (let i = 0; i < bigH.length; i++) {
    if (bigH[i] === tanker[i]) {
      return true;
    }
  }
  return false;

};




assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);




