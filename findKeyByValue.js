
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion passed ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed + ${actual} + !== + ${expected}`);
  }
};



const findKey = function(genre, show) {

  let keys = Object.keys(genre)
  for (key of keys) {
    if (genre[key] === show) {
      return key;
    }
  }
  

    }
  





const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log((findKey)(bestTVShowsByGenre, 'The Wire'));
assertEqual(findKey(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKey(bestTVShowsByGenre, "That '70s Show"), undefined);

