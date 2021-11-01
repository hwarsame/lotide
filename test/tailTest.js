
const assertEqual =  require('../assertEqual');
const tail = require('../tail');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);