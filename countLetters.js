const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion passed ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed + ${actual} + !== + ${expected}`);
  }
};
const countLetters = function(letters) {
  let letterList = {};
  for (letter of letters) {
    if (!letterList[letter]) {
      letterList[letter] = 1;
    } else {
      letterList[letter] += 1;
    }

  }

  return letterList;

};
console.log(countLetters('lighthouselabs'));